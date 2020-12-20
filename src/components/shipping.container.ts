import { ShippingAbstractContainer } from './shipping.abstract.container';
import { ShippingState } from './shipping.state';
import { ShippingProps } from './shipping.props';
import { Builder } from '../builder';
import { IAbode } from '../forms/Abode/types';
import { IInput, IOption, ISelect } from '../forms/Field/types';
import { ShippingFields } from './shipping.fields';
import { ICheckbox } from '../forms/Checkbox/types';
import { EMPTY } from './empty';

export class ShippingContainer extends ShippingAbstractContainer {
  public readonly state: ShippingState;

  constructor(props: ShippingProps) {
    super(props);

    this.state = Builder<ShippingState>()
      .delivery(
        Builder<IAbode>()
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
                  .value('CZ')
                  .title('Czechia')
                  .build(),
              ])
              .build()
          )
          .build()
      )
      .invoicing(
        Builder<IAbode>()
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
                  .value('Prague')
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
                  .value('CZ')
                  .build(),
              ])
              .build()
          )
          .build()
      )
      .company(
        Builder<ICheckbox>()
          .id(ShippingFields.COMPANY)
          .checked(true)
          .title(EMPTY)
          .build()
      )
      .data(
        Builder<ICheckbox>()
          .id(ShippingFields.DATA)
          .checked(false)
          .title(EMPTY)
          .build()
      )
      .terms(
        Builder<ICheckbox>()
          .id(ShippingFields.TERMS)
          .checked(false)
          .title(EMPTY)
          .build()
      )
      .build();
  }
}
