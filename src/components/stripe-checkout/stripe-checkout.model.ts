import { PaymentMethodCreateParams } from '@stripe/stripe-js';

export interface StripeCheckoutDelivery {
  street: string;
  streetNo: string;
  postcode: string;
  city: string;
  country: string;
}

export interface StripeCheckoutBilling
  extends PaymentMethodCreateParams.BillingDetails {
  name: string;
  email: string;
  phone: string;
  address: PaymentMethodCreateParams.BillingDetails.Address;
}

export interface StripeCheckoutConditions {
  terms: boolean;
  data: boolean;
}

export interface StripeCheckoutModel {
  delivery: StripeCheckoutDelivery;
  conditions: StripeCheckoutConditions;
  forename: string;
  surname: string;
  phone: string;
  email: string;
  carrier?: string;
}
