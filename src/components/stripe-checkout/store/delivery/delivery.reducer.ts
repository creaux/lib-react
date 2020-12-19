import {
  DeliveryActionTypes,
  DeliveryState,
  SET_DELIVERY,
  SET_DELIVERY_DISABLED,
  SET_DELIVERY_VALID,
} from './delivery.types';

const initialState: DeliveryState = {
  city: '',
  country: '',
  postcode: '',
  street: '',
  streetNo: '',
  valid: false,
  disabled: false,
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
    case SET_DELIVERY_DISABLED:
      return { ...state, disabled: action.disabled };
    default:
      return state;
  }
}
