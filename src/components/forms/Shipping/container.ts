import { Component, FormEvent, createElement, ReactNode } from 'react';
import { Shipping as ShippingComponent } from './component';
import { AbodeBuilder, IAbode } from '../Abode';
import { CheckboxBuilder, ICheckbox } from '../Checkbox/types';
import { merge } from 'lodash';
import { BuilderInterface } from '@pyxismedia/lib-model';
import { IShippingFields, IShippingGroups } from './types';
import { InputBuilder, OptionBuilder, SelectBuilder } from '../Field/types';

const { assign } = Object;

type Group = 'invoicing' | 'delivery';
type Field = 'terms' | 'data' | 'company';

export interface ShippingProps {
  onFormChange: (data: ShippingState) => void;
  onFormValidChange: (valid: boolean) => void;
}

export class ShippingStateBuilder implements BuilderInterface<ShippingState> {
  private delivery!: IAbode;
  private invoicing!: IAbode;
  private terms!: ICheckbox;
  private data!: ICheckbox;
  private company!: ICheckbox;

  withDelivery(delivery: IAbode) {
    this.delivery = delivery;
    return this;
  }

  withInvoicing(invoicing: IAbode) {
    this.invoicing = invoicing;
    return this;
  }

  withTerms(terms: ICheckbox) {
    this.terms = terms;
    return this;
  }

  withData(data: ICheckbox) {
    this.data = data;
    return this;
  }

  withCompany(company: ICheckbox) {
    this.company = company;
    return this;
  }

  build(): ShippingState {
    return {
      delivery: this.delivery,
      invoicing: this.invoicing,
      terms: this.terms,
      data: this.data,
      company: this.company
    };
  }
}

export interface ShippingState extends IShippingGroups, IShippingFields {}

export class Shipping extends Component<ShippingProps, ShippingState> {
  state: ShippingState;

  constructor(props: ShippingProps) {
    super(props);

    this.state = new ShippingStateBuilder()
      .withDelivery(
        new AbodeBuilder()
          .withForname(
            new InputBuilder()
              .withId('forname2')
              .withValue('')
              .withValid(false)
              .build()
          )
          .withSurname(
            new InputBuilder()
              .withId('surname2')
              .withValue('')
              .withValid(false)
              .build()
          )
          .withStreet(
            new InputBuilder()
              .withId('street2')
              .withValue('')
              .withValid(false)
              .build()
          )
          .withStreetNo(
            new InputBuilder()
              .withId('streetNo2')
              .withValue('')
              .withValid(false)
              .build()
          )
          .withPostcode(
            new InputBuilder()
              .withId('postcode2')
              .withValue('')
              .withValid(false)
              .build()
          )
          .withCities(
            new SelectBuilder()
              .withId('city2')
              .withValue('')
              .withOptions([
                new OptionBuilder()
                  .withId('prague')
                  .withValue('Prague')
                  .withTitle('Prague')
                  .build()
              ])
              .build()
          )
          .withCountries(
            new SelectBuilder()
              .withId('country2')
              .withValue('')
              .withOptions([
                new OptionBuilder()
                  .withId('czechia')
                  .withValue('Czechia')
                  .withTitle('Czechia')
                  .build()
              ])
              .build()
          )
          .build()
      )
      .withInvoicing(
        new AbodeBuilder()
          .withForname(
            new InputBuilder()
              .withId('forname1')
              .withValue('')
              .withValid(false)
              .build()
          )
          .withSurname(
            new InputBuilder()
              .withId('surname1')
              .withValue('')
              .withValid(false)
              .build()
          )
          .withCompany(
            new InputBuilder()
              .withId('company')
              .withValue('')
              .withValid(false)
              .build()
          )
          .withVat(
            new InputBuilder()
              .withId('vat')
              .withValue('')
              .withValid(false)
              .build()
          )
          .withStreet(
            new InputBuilder()
              .withId('street1')
              .withValue('')
              .withValid(false)
              .build()
          )
          .withStreetNo(
            new InputBuilder()
              .withId('streetNo1')
              .withValue('')
              .withValid(false)
              .build()
          )
          .withPostcode(
            new InputBuilder()
              .withId('postcode1')
              .withValue('')
              .withValid(false)
              .build()
          )
          .withCities(
            new SelectBuilder()
              .withId('city1')
              .withValue('')
              .withOptions([
                new OptionBuilder()
                  .withId('prague')
                  .withTitle('Prague')
                  .withValue('prague')
                  .build()
              ])
              .build()
          )
          .withCountries(
            new SelectBuilder()
              .withId('country1')
              .withValue('')
              .withOptions([
                new OptionBuilder()
                  .withId('czechia')
                  .withTitle('Czechia')
                  .withValue('czechia')
                  .build()
              ])
              .build()
          )
          .build()
      )
      .withCompany(
        new CheckboxBuilder()
          .withId('company')
          .withChecked(true)
          .build()
      )
      .withData(
        new CheckboxBuilder()
          .withId('data')
          .withChecked(false)
          .build()
      )
      .withTerms(
        new CheckboxBuilder()
          .withId('terms')
          .withChecked(false)
          .build()
      )
      .build();
  }

  componentDidUpdate(
    prevProps: Readonly<ShippingProps>,
    prevState: Readonly<ShippingState>,
    snapshot?: any
  ) {
    const {
      onFormChange: handleFormChange,
      onFormValidChange: handleFormValidChange
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
    this.setState(
      merge(this.state, {
        [group]: {
          [field]: { valid }
        }
      })
    );
  };

  private get isValidDelivery() {
    return (
      Object.keys(this.state.delivery)
        // If it is undefined then it doesn't exists and doesn't need to be validated
        .filter(key => this.state.delivery[key as keyof IAbode])
        .every(key => {
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
      Object.keys(this.state.invoicing)
        // If it is undefined then it doesn't exists and doesn't need to be validated
        .filter(key => this.state.invoicing[key as keyof IAbode])
        .every(key => {
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

  render(): ReactNode {
    const props = {
      ...this.state,
      onGroupChange: this.handleGroupChange,
      onFieldChange: this.handleCheckboxChange,
      onValidGroupFieldChange: this.handleValidGroupFieldChange
    };
    return createElement(ShippingComponent, props);
  }
}
