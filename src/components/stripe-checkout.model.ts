export interface StripeCheckoutDelivery {
  forename: string;
  surname: string;
  street: string;
  streetNo: string;
  postcode: string;
  city: string;
  country: string;
}

export interface StripeCheckoutBilling extends StripeCheckoutDelivery {
  company: string;
  vat: string;
}

export interface StripeCheckoutConditions {
  terms: boolean;
  data: boolean;
}

export interface StripeCheckoutModel {
  delivery: StripeCheckoutDelivery;
  billing: StripeCheckoutBilling;
  conditions: StripeCheckoutConditions;
}
