import { Billing, SET_BILLING, SET_BILLING_VALID } from './billing.types';

export const setBilling = (billing: Billing) => ({
  type: SET_BILLING,
  billing,
});

export const setBillingValid = (valid: boolean) => ({
  type: SET_BILLING_VALID,
  valid,
});
