export enum StripeCheckoutTranslation {
  BACK = 'BACK',
  PAYMENT_TITLE = 'PAYMENT_TITLE',
  CHECKOUT_BUTTON = 'CHECKOUT_BUTTON',
}

export interface StripeCheckoutTranslations {
  [StripeCheckoutTranslation.BACK]: string;
  [StripeCheckoutTranslation.PAYMENT_TITLE]: string;
  [StripeCheckoutTranslation.CHECKOUT_BUTTON]: string;
}
