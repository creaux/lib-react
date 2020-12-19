import {
  DeliveryStore,
  SET_DELIVERY,
  SET_DELIVERY_DISABLED,
  SET_DELIVERY_VALID,
  SetDeliveryAction,
  SetDeliveryDisabledAction,
  SetDeliveryValidAction,
} from './delivery.types';

export const setDelivery = (delivery: DeliveryStore): SetDeliveryAction => ({
  type: SET_DELIVERY,
  delivery,
});

export const setDeliveryValid = (valid: boolean): SetDeliveryValidAction => ({
  type: SET_DELIVERY_VALID,
  valid,
});

export const setDeliveryDisabled = (
  disabled: boolean
): SetDeliveryDisabledAction => ({
  type: SET_DELIVERY_DISABLED,
  disabled,
});
