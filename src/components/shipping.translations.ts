import { Translations } from './i18n.component';

export enum ShippingTranslation {
  SHIPPING_DELIVERY_HEADING = 'SHIPPING_DELIVERY_HEADING',
  SHIPPING_BILLING_HEADING = 'SHIPPING_BILLING_HEADING',
  SHIPPING_IS_COMPANY = 'SHIPPING_IS_COMPANY',
  SHIPPING_TERMS = 'SHIPPING_TERMS',
  SHIPPING_DATA = 'SHIPPING_DATA',
}

export interface ShippingTranslations extends Translations {
  [ShippingTranslation.SHIPPING_DELIVERY_HEADING]: string;
  [ShippingTranslation.SHIPPING_BILLING_HEADING]: string;
  [ShippingTranslation.SHIPPING_IS_COMPANY]: string;
  [ShippingTranslation.SHIPPING_TERMS]: string;
  [ShippingTranslation.SHIPPING_DATA]: string;
}
