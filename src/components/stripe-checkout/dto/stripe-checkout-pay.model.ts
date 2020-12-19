import { StripeCheckoutDto } from './stripe-checkout.dto';

export interface StripeCheckoutPay {
  productId: string;
  checkout: StripeCheckoutDto;
}
