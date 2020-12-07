import {
  DeliveryActionTypes,
  DeliveryState,
  SET_DELIVERY,
  SET_DELIVERY_VALID,
} from './delivery.types';

const initialState: DeliveryState = {
  city: '',
  country: '',
  postcode: '',
  street: '',
  streetNo: '',
  valid: false
};

export function deliveryReducer(
  state: DeliveryState = initialState,
  action: DeliveryActionTypes
) {
  switch (action.type) {
    case SET_DELIVERY:
      return { ...state, ...action.delivery };
    case SET_DELIVERY_VALID:
      return { ...state, valid: action.valid };
    default:
      return state;
  }
}
