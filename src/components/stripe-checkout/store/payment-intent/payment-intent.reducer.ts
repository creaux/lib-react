import {
  PaymentIntentActionTypes,
  PaymentIntentState,
  SET_PAYMENT_PROCESSING,
  SET_PAYMENT_READY,
  SET_PAYMENT_VALID,
  SET_SECRET,
} from './payment-intent.types';

const initialState: PaymentIntentState = {
  secret: '',
  ready: false,
  valid: false,
  processing: false,
  succeeded: undefined,
};

export function paymentIntentReducer(
  state: PaymentIntentState = initialState,
  action: PaymentIntentActionTypes
) {
  switch (action.type) {
    case SET_SECRET:
      return { ...state, secret: action.secret };
    case SET_PAYMENT_READY:
      return { ...state, ready: action.ready };
    case SET_PAYMENT_VALID:
      return { ...state, valid: action.valid };
    case SET_PAYMENT_PROCESSING:
      return { ...state, processing: action.processing };
    default:
      return state;
  }
}
