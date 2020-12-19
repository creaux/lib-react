import { PaymentMethodCreateParams } from '@stripe/stripe-js';

export interface StripeCheckoutBillingDto
  extends PaymentMethodCreateParams.BillingDetails {
  name: string;
  email: string;
  phone: string;
  address: PaymentMethodCreateParams.BillingDetails.Address;
}
