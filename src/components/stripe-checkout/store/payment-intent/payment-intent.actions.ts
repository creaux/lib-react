import {
  SET_PAYMENT_PROCESSING,
  SET_PAYMENT_READY,
  SET_PAYMENT_VALID,
  SET_SECRET,
  SetPaymentProcessingAction,
  SetPaymentReadyAction,
  SetPaymentValidAction,
  SetSecretAction,
} from './payment-intent.types';

export const setSecret = (secret: string): SetSecretAction => ({
  type: SET_SECRET,
  secret,
});

export const setPaymentReady = (ready: boolean): SetPaymentReadyAction => ({
  type: SET_PAYMENT_READY,
  ready,
});

export const setPaymentValid = (valid: boolean): SetPaymentValidAction => ({
  type: SET_PAYMENT_VALID,
  valid,
});

export const setPaymentProcessing = (
  processing: boolean
): SetPaymentProcessingAction => ({
  type: SET_PAYMENT_PROCESSING,
  processing,
});
