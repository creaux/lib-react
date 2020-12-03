import {
  BillingActionTypes,
  BillingState,
  SET_BILLING,
  SET_BILLING_VALID,
} from './billing.types';

const initialState: BillingState = {
  cities: '',
  company: '',
  countries: '',
  postcode: '',
  street: '',
  streetNo: '',
  vat: '',
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
    default:
      return state;
  }
}
