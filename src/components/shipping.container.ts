import { ShippingAbstractContainer } from './shipping.abstract.container';
import { ShippingState } from './shipping.state';
import { ShippingProps } from './shipping.props';
import { Builder } from '../builder';
import { IAbode } from '../forms/Abode/types';
import { IInput, IOption, ISelect } from '../forms/Field/types';
import { ShippingFields } from './shipping.fields';
import { ICheckbox } from '../forms/Checkbox/types';

export class ShippingContainer extends ShippingAbstractContainer {
  public readonly state: ShippingState;

  constructor(props: ShippingProps) {
    super(props);

    this.state = Builder<ShippingState>()
      .delivery(
        Builder<IAbode & { title: string }>()
          .title('Delivery')
          .forname(
            Builder<IInput>()
              .id(ShippingFields.DELIVERY_FORENAME)
              .value('')
              .valid(false)
              .build()
          )
          .surname(
            Builder<IInput>()
              .id(ShippingFields.DELIVERY_SURNAME)
              .value('')
              .valid(false)
              .build()
          )
          .street(
            Builder<IInput>()
              .id(ShippingFields.DELIVERY_STREET)
              .value('')
              .valid(false)
              .build()
          )
          .streetNo(
            Builder<IInput>()
              .id(ShippingFields.DELIVERY_STREET_NO)
              .value('')
              .valid(false)
              .build()
          )
          .postcode(
            Builder<IInput>()
              .id(ShippingFields.DELIVERY_POSTCODE)
              .value('')
              .valid(false)
              .build()
          )
          .cities(
            Builder<ISelect>()
              .id(ShippingFields.DELIVERY_CITY)
              .value('')
              .options([
                Builder<IOption>()
                  .id('prague')
                  .value('Prague')
                  .title('Prague')
                  .build(),
              ])
              .build()
          )
          .countries(
            Builder<ISelect>()
              .id(ShippingFields.DELIVERY_COUNTRY)
              .value('')
              .options([
                Builder<IOption>()
                  .id('czechia')
                  .value('Czechia')
                  .title('Czechia')
                  .build(),
              ])
              .build()
          )
          .build()
      )
      .invoicing(
        Builder<IAbode & { title: string }>()
          .title('Billing')
          .forname(
            Builder<IInput>()
              .id(ShippingFields.BILLING_FORENAME)
              .value('')
              .valid(false)
              .build()
          )
          .surname(
            Builder<IInput>()
              .id(ShippingFields.BILLING_SURNAME)
              .value('')
              .valid(false)
              .build()
          )
          .company(
            Builder<IInput>()
              .id(ShippingFields.BILLING_COMPANY)
              .value('')
              .valid(false)
              .build()
          )
          .vat(
            Builder<IInput>()
              .id(ShippingFields.BILLING_VAT)
              .value('')
              .valid(false)
              .build()
          )
          .street(
            Builder<IInput>()
              .id(ShippingFields.BILLING_STREET)
              .value('')
              .valid(false)
              .build()
          )
          .streetNo(
            Builder<IInput>()
              .id(ShippingFields.BILLING_STREET_NO)
              .value('')
              .valid(false)
              .build()
          )
          .postcode(
            Builder<IInput>()
              .id(ShippingFields.BILLING_POSTCODE)
              .value('')
              .valid(false)
              .build()
          )
          .cities(
            Builder<ISelect>()
              .id(ShippingFields.BILLING_CITY)
              .value('')
              .options([
                Builder<IOption>()
                  .id('prague')
                  .title('Prague')
                  .value('prague')
                  .build(),
              ])
              .build()
          )
          .countries(
            Builder<ISelect>()
              .id(ShippingFields.BILLING_COUNTRY)
              .value('')
              .options([
                Builder<IOption>()
                  .id('czechia')
                  .title('Czechia')
                  .value('czechia')
                  .build(),
              ])
              .build()
          )
          .build()
      )
      .company(
        Builder<ICheckbox>()
          .id(ShippingFields.COMPANY)
          .title('Is billing address same as delivery address?')
          .checked(true)
          .build()
      )
      .data(
        Builder<ICheckbox>()
          .id(ShippingFields.DATA)
          .title('Agreement with personal data processing')
          .checked(false)
          .build()
      )
      .terms(
        Builder<ICheckbox>()
          .id(ShippingFields.TERMS)
          .title('Agreement with terms and conditions')
          .checked(false)
          .build()
      )
      .build();
  }
}
