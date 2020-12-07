import {
  Delivery,
  SET_DELIVERY,
  SET_DELIVERY_VALID,
  SetDeliveryAction,
  SetDeliveryValidAction
} from './delivery.types';

export const setDelivery = (delivery: Delivery): SetDeliveryAction => ({
  type: SET_DELIVERY,
  delivery,
});

export const setDeliveryValid = (valid: boolean): SetDeliveryValidAction => ({
  type: SET_DELIVERY_VALID,
  valid,
});
