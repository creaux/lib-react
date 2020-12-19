import {
  SET_PAYMENT_FAILED,
  SET_PAYMENT_PROCESSING,
  SET_PAYMENT_READY,
  SET_PAYMENT_SUCCEEDED,
  SET_PAYMENT_VALID,
  SET_SECRET,
  SetPaymentFailedAction,
  SetPaymentProcessingAction,
  SetPaymentReadyAction,
  SetPaymentSucceededAction,
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

export const setPaymentSucceeded = (): SetPaymentSucceededAction => ({
  type: SET_PAYMENT_SUCCEEDED,
});

export const setPaymentFailed = (): SetPaymentFailedAction => ({
  type: SET_PAYMENT_FAILED,
});
