export interface BillingState {
  company?: string;
  vat?: string;
  street: string;
  streetNo: string;
  postcode: string;
  city: string;
  country: string;
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

export const SET_BILLING = 'SET_BILLING';
export const SET_BILLING_VALID = 'SET_BILLING_VALID';

export interface SetBillingAction {
  type: typeof SET_BILLING;
  billing: BillingState;
}

export interface SetBillingValidAction {
  type: typeof SET_BILLING_VALID;
  valid: boolean;
}

export type BillingActionTypes = SetBillingAction | SetBillingValidAction;
