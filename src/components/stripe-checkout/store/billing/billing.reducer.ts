import {
  BillingActionTypes,
  BillingState,
  SET_BILLING,
  SET_BILLING_VALID,
  SET_SAME_AS_DELIVERY,
} from './billing.types';

const initialState: BillingState = {
  city: '',
  company: '',
  country: '',
  postcode: '',
  street: '',
  streetNo: '',
  vat: '',
  valid: false,
  sameAsDelivery: true,
};

export function billingReducer(
  state: BillingState = initialState,
  action: BillingActionTypes
) {
  switch (action.type) {
    case SET_BILLING:
      return { ...state, ...action.billing };
    case SET_BILLING_VALID:
      return { ...state, valid: action.valid };
    case SET_SAME_AS_DELIVERY:
      return { ...state, sameAsDelivery: action.sameAsDelivery };
    default:
      return state;
  }
}
