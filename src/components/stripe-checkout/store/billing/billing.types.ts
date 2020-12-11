export interface BillingState {
  company?: string;
  vat?: string;
  street: string;
  streetNo: string;
  postcode: string;
  city: string;
  country: string;
  valid: boolean;
  sameAsDelivery: boolean;
}

export interface Billing {
  company?: string;
  vat?: string;
  street: string;
  streetNo: string;
  postcode: string;
  city: string;
  country: string;
}

export interface BillingValid {
  valid: boolean;
}

export interface BillingDelivery {
  sameAsDelivery: boolean;
}

export const SET_BILLING = 'SET_BILLING';
export const SET_BILLING_VALID = 'SET_BILLING_VALID';
export const SET_SAME_AS_DELIVERY = 'SET_SAME_AS_DELIVERY';

export interface SetBillingAction {
  type: typeof SET_BILLING;
  billing: BillingState;
}

export interface SetBillingValidAction {
  type: typeof SET_BILLING_VALID;
  valid: boolean;
}

export interface SetBillingSameAsDeliveryAction {
  type: typeof SET_SAME_AS_DELIVERY;
  sameAsDelivery: boolean;
}

export type BillingActionTypes =
  | SetBillingAction
  | SetBillingValidAction
  | SetBillingSameAsDeliveryAction;
