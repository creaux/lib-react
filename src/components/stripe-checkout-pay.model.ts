import { StripeCheckoutModel } from './stripe-checkout.model';

export interface StripeCheckoutPay {
  productId: string;
  checkout: StripeCheckoutModel;
}
