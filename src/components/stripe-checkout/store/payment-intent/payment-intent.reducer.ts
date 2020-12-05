import {
  PaymentIntentActionTypes,
  PaymentIntentState,
  SET_SECRET,
} from './payment-intent.types';

const initialState: PaymentIntentState = {
  secret: '',
};

export function paymentIntentReducer(
  state: PaymentIntentState = initialState,
  action: PaymentIntentActionTypes
) {
  switch (action.type) {
    case SET_SECRET:
      return { secret: action.secret };
    default:
      return state;
  }
}
