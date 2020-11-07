import { Component, FormEvent, createElement, ReactNode } from 'react';
import {
  Shipping as ShippingComponent,
  ShippingProps as ShippingComponentProps,
  ShippingTitles,
} from './component';
import { IAbode } from '../Abode';
import { ICheckbox } from '../Checkbox/types';
import { merge } from 'lodash';
import { IShippingFields, IShippingGroups } from './types';
import { Builder } from '../../builder';
import { shippingState } from './shipping.props';

const { assign, keys } = Object;

type Group = 'invoicing' | 'delivery';
type Field = 'terms' | 'data' | 'company';

export interface ShippingProps {
  onFormChange: (data: ShippingState) => void;
  onFormValidChange: (valid: boolean) => void;
  delivery: string;
  billing: string;
  same: string;
  terms: string;
  data: string;
}

export interface ShippingState extends IShippingGroups, IShippingFields {}

export class Shipping extends Component<ShippingProps, ShippingState> {
  state: ShippingState;

  constructor(props: ShippingProps) {
    super(props);
    this.state = assign({}, shippingState);
  }

  componentDidUpdate(
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

  private handleCheckboxChange = (field: Field) => (
    event: FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    let data = assign({}, this.state);
    const { checked } = event.currentTarget as HTMLInputElement;
    (data[field] as ICheckbox).checked = checked;
    this.setState(data);
  };

  private handleGroupChange = (group: Group) => (field: keyof IAbode) => (
    event: FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value } = event.currentTarget;
    let data = assign({}, this.state);
    data[group][field]!['value'] = value;
    this.setState(data);
  };

  private handleValidGroupFieldChange = (group: Group) => (
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
    return Builder<ShippingComponentProps>()
      .onGroupChange(this.handleGroupChange)
      .onFieldChange(this.handleCheckboxChange)
      .onValidGroupFieldChange(this.handleValidGroupFieldChange)
      .build();
  }

  render(): ReactNode {
    return createElement(ShippingComponent, {
      ...this.state,
      ...this.shippingProps,
    });
  }
}
