import { Delivery, SET_DELIVERY, SET_DELIVERY_VALID } from './delivery.types';

export const setDelivery = (billing: Delivery) => ({
  type: SET_DELIVERY,
  billing,
});

export const setDeliveryValid = (valid: boolean) => ({
  type: SET_DELIVERY_VALID,
  valid,
});
