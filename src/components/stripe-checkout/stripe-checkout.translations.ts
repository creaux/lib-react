export enum StripeCheckoutTranslation {
  BACK = 'BACK',
  PAYMENT_TITLE = 'PAYMENT_TITLE',
  CHECKOUT_BUTTON = 'CHECKOUT_BUTTON',
  PROCESSING_PAYMENT = 'PROCESSING_PAYMENT',
  DELIVERY_TITLE = 'DELIVERY_TITLE',
  BILLING_TITLE = 'BILLING_TITLE',
  IS_BILLING = 'IS_BILLING',
  DATA = 'DATA',
  TERMS = 'TERMS',
}

export interface StripeCheckoutTranslations {
  [StripeCheckoutTranslation.BACK]: string;
  [StripeCheckoutTranslation.PAYMENT_TITLE]: string;
  [StripeCheckoutTranslation.CHECKOUT_BUTTON]: string;
  [StripeCheckoutTranslation.PROCESSING_PAYMENT]: string;
  [StripeCheckoutTranslation.DELIVERY_TITLE]: string;
  [StripeCheckoutTranslation.BILLING_TITLE]: string;
  [StripeCheckoutTranslation.IS_BILLING]: string;
  [StripeCheckoutTranslation.DATA]: string;
  [StripeCheckoutTranslation.TERMS]: string;
}
