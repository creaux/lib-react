import React, { FunctionComponent } from 'react';
import { Builder, I18n, Translations } from '../..';
import defaultTranslations from '../Shipping/en.json';
import {
  Shipping as ShippingComponent,
  ShippingProps as ShippingComponentProps,
} from './shipping.component';

export interface ShippingProps
  extends Omit<
    ShippingComponentProps,
    | 'deliveryHeading'
    | 'billingHeading'
    | 'companyDescription'
    | 'termsDescription'
    | 'dataDescription'
  > {}

export interface ShippingTranslations extends Translations {
  SHIPPING_DELIVERY_HEADING: string;
  SHIPPING_BILLING_HEADING: string;
  SHIPPING_IS_COMPANY: string;
  SHIPPING_TERMS: string;
  SHIPPING_DATA: string;
}

export const Shipping: FunctionComponent<ShippingProps> = (
  props: ShippingProps
) => (
  <I18n.Consumer<ShippingTranslations>
    defaultTranslations={defaultTranslations}
  >
    {(translations) => {
      const i18n = Builder<ShippingComponentProps>()
        .deliveryHeading(translations.SHIPPING_DELIVERY_HEADING)
        .billingHeading(translations.SHIPPING_BILLING_HEADING)
        .companyDescription(translations.SHIPPING_IS_COMPANY)
        .termsDescription(translations.SHIPPING_TERMS)
        .dataDescription(translations.SHIPPING_DATA)
        .build();
      return <ShippingComponent {...props} {...i18n} />;
    }}
  </I18n.Consumer>
);
