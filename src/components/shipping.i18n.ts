import defaultTranslations from './shipping.default.json';
import {
  ShippingComponent,
  ShippingComponentProps,
} from './shipping.component';
import { Builder } from '../builder';
import {
  OnFieldChange,
  OnGroupChange,
  OnValidGroupFieldChange,
} from './form.types';
import { ShippingFields, ShippingGroups } from './shipping.types';
import { IAbode } from '../forms/Abode/types';
import { Translate } from './i18n.abstract.component';
import {
  ShippingTranslation,
  ShippingTranslations,
} from './shipping.translations';
import { ICheckbox } from '../forms/Checkbox/types';

export interface ShippingI18nProps extends ShippingGroups, ShippingFields {
  onFieldChange: OnFieldChange<keyof ShippingFields>;
  onGroupChange: OnGroupChange<keyof ShippingGroups, keyof IAbode>;
  onValidGroupFieldChange: OnValidGroupFieldChange<
    keyof ShippingGroups,
    keyof IAbode
  >;
  disabled: boolean;
}

export class ShippingI18n extends Translate<
  ShippingI18nProps,
  ShippingComponentProps,
  ShippingTranslations
> {
  protected defaultTranslations: ShippingTranslations = defaultTranslations;
  protected readonly Component = ShippingComponent;

  protected getProps(): ShippingComponentProps {
    return Builder<ShippingComponentProps>()
      .deliveryHeading(
        this.i18n.get(ShippingTranslation.SHIPPING_DELIVERY_HEADING) as string
      )
      .billingHeading(
        this.i18n.get(ShippingTranslation.SHIPPING_BILLING_HEADING) as string
      )
      .company(
        Builder<ICheckbox>()
          .checked(this.props.company.checked)
          .id(this.props.company.id)
          .title(
            this.i18n.get(ShippingTranslation.SHIPPING_IS_COMPANY) as string
          )
          .build()
      )
      .invoicing(this.props.invoicing)
      .data(
        Builder<ICheckbox>()
          .title(this.i18n.get(ShippingTranslation.SHIPPING_DATA) as string)
          .checked(this.props.data.checked)
          .id(this.props.data.id)
          .build()
      )
      .terms(
        Builder<ICheckbox>()
          .title(this.i18n.get(ShippingTranslation.SHIPPING_TERMS) as string)
          .checked(this.props.terms.checked)
          .id(this.props.terms.id)
          .build()
      )
      .delivery(this.props.delivery)
      .onValidGroupFieldChange(this.props.onValidGroupFieldChange)
      .onFieldChange(this.props.onFieldChange)
      .onGroupChange(this.props.onGroupChange)
      .disabled(this.props.disabled)
      .build();
  }
}
