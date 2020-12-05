export enum StripeCheckoutTranslation {
  BACK = 'BACK',
  PAYMENT_TITLE = 'PAYMENT_TITLE',
  CHECKOUT_BUTTON = 'CHECKOUT_BUTTON',
  PROCESSING_PAYMENT = 'PROCESSING_PAYMENT',
}

export interface StripeCheckoutTranslations {
  [StripeCheckoutTranslation.BACK]: string;
  [StripeCheckoutTranslation.PAYMENT_TITLE]: string;
  [StripeCheckoutTranslation.CHECKOUT_BUTTON]: string;
  [StripeCheckoutTranslation.PROCESSING_PAYMENT]: string;
}
