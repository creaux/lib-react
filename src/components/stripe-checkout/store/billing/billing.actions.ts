import {
  Billing,
  SET_BILLING,
  SET_BILLING_VALID,
  SET_SAME_AS_DELIVERY,
} from './billing.types';

export const setBilling = (billing: Billing) => ({
  type: SET_BILLING,
  billing,
});

export const setBillingValid = (valid: boolean) => ({
  type: SET_BILLING_VALID,
  valid,
});

export const setBillingSameAsDelivery = (sameAsDelivery: boolean) => ({
  type: SET_SAME_AS_DELIVERY,
  sameAsDelivery,
});
