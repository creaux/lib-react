import { Component, FormEvent, createElement, ReactNode } from 'react';
import { ShippingI18n, ShippingI18nProps } from './shipping.i18n';
import { merge } from 'lodash';
import { ICheckbox } from '../forms/Checkbox/types';
import { IAbode } from '../forms/Abode';
import { Builder } from '../builder';
import { ShippingProps } from './shipping.props';
import { ShippingState } from './shipping.state';

const { assign, keys } = Object;

type Group = 'invoicing' | 'delivery';
type Field = 'terms' | 'data' | 'company';

export abstract class ShippingAbstractContainer extends Component<
  ShippingProps,
  ShippingState
> {
  public abstract readonly state: ShippingState;

  public componentDidUpdate(
    prevProps: Readonly<ShippingProps>,
    prevState: Readonly<ShippingState>,
    snapshot?: any
  ) {
    const {
      onFormChange: handleFormChange,
      onFormValidChange: handleFormValidChange,
    } = this.props;

    handleFormValidChange(this.isValid);
    handleFormChange(this.state);
  }

  private readonly handleCheckboxChange = (field: Field) => (
    event: FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    let data = assign({}, this.state);
    const { checked } = event.currentTarget as HTMLInputElement;
    (data[field] as ICheckbox).checked = checked;
    this.setState(data);
  };

  private readonly handleGroupChange = (group: Group) => (
    field: keyof IAbode
  ) => (event: FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value } = event.currentTarget;
    let data = assign({}, this.state);
    data[group][field]!['value'] = value;
    this.setState(data);
  };

  private readonly handleValidGroupFieldChange = (group: Group) => (
    field: keyof IAbode
  ) => (valid: boolean) => {
    const state = merge(this.state, {
      [group]: {
        [field]: { valid },
      },
    });
    this.setState(state);
  };

  private get isValidDelivery() {
    return (
      keys(this.state.delivery)
        // If it is undefined then it doesn't exists and doesn't need to be validated
        .filter((key) => this.state.delivery[key as keyof IAbode])
        .every((key) => {
          const field = this.state.delivery[key as keyof IAbode];
          if (field) {
            return field.valid;
          }
          return null;
        })
    );
  }

  private get isValidBilling() {
    return (
      keys(this.state.invoicing)
        // If it is undefined then it doesn't exists and doesn't need to be validated
        .filter((key) => this.state.invoicing[key as keyof IAbode])
        .every((key) => {
          const field = this.state.invoicing[key as keyof IAbode];
          if (field) {
            return field.valid;
          }
          return undefined;
        })
    );
  }

  private get isValid() {
    const company = !this.state.company.checked;
    const terms = this.state.terms.checked;
    const data = this.state.data.checked;

    return (
      this.isValidDelivery &&
      terms &&
      data &&
      (company ? this.isValidBilling : true)
    );
  }

  private get shippingProps() {
    return Builder<ShippingI18nProps>()
      .onGroupChange(this.handleGroupChange)
      .onFieldChange(this.handleCheckboxChange)
      .onValidGroupFieldChange(this.handleValidGroupFieldChange)
      .disabled(this.props.disabled)
      .build();
  }

  render(): ReactNode {
    return createElement(ShippingI18n, {
      ...this.state,
      ...this.shippingProps,
    });
  }
}
