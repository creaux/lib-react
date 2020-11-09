import defaultTranslations from './shipping.default.json';
import {
  ShippingComponent,
  ShippingComponentProps,
} from './shipping.component';
import { Builder } from '../builder';
import { Translations } from './i18n.component';
import { OnFieldChange, OnGroupChange, OnValidGroupFieldChange } from './form.types';
import { IShippingFields, IShippingGroups } from './shipping.types';
import { IAbode } from '../forms/Abode/types';
import { Translate } from './i18n.abstract.component';

export interface ShippingI18nProps extends IShippingGroups, IShippingFields {
  onFieldChange: OnFieldChange<keyof IShippingFields>;
  onGroupChange: OnGroupChange<keyof IShippingGroups, keyof IAbode>;
  onValidGroupFieldChange: OnValidGroupFieldChange<keyof IShippingGroups, keyof IAbode>;
}

export interface ShippingTranslations extends Translations {
  SHIPPING_DELIVERY_HEADING: string;
  SHIPPING_BILLING_HEADING: string;
  SHIPPING_IS_COMPANY: string;
  SHIPPING_TERMS: string;
  SHIPPING_DATA: string;
}

export class ShippingI18n extends Translate<ShippingI18nProps, ShippingComponentProps, ShippingTranslations> {
  protected defaultTranslations = defaultTranslations;
  protected readonly Component = ShippingComponent;

  protected getProps(): ShippingComponentProps {
    return Builder<ShippingComponentProps>()
      .deliveryHeading(this.i18n.get('SHIPPING_DELIVERY_HEADING') as string)
      .billingHeading(this.i18n.get('SHIPPING_BILLING_HEADING') as string)
      .companyDescription(this.i18n.get('SHIPPING_IS_COMPANY') as string)
      .termsDescription(this.i18n.get('SHIPPING_TERMS') as string)
      .dataDescription(this.i18n.get('SHIPPING_DATA') as string)
      .company(this.props.company)
      .data(this.props.data)
      .terms(this.props.terms)
      .delivery(this.props.delivery)
      .onValidGroupFieldChange(this.props.onValidGroupFieldChange)
      .onFieldChange(this.props.onFieldChange)
      .onGroupChange(this.props.onGroupChange)
      .build();
  }
}
