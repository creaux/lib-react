export interface PaymentIntentResponse {
  client_secret: string;
}

export interface PaymentIntentState {
  secret: string;
  ready: boolean;
  valid: boolean;
  processing: boolean;
}

export const SET_SECRET = 'SET_SECRET';
export const SET_PAYMENT_READY = 'SET_PAYMENT_READY';
export const SET_PAYMENT_VALID = 'SET_PAYMENT_VALID';
export const SET_PAYMENT_PROCESSING = 'SET_PAYMENT_PROCESSING';

export interface SetSecretAction {
  type: typeof SET_SECRET;
  secret: string;
}

export interface SetPaymentReadyAction {
  type: typeof SET_PAYMENT_READY;
  ready: boolean;
}

export interface SetPaymentValidAction {
  type: typeof SET_PAYMENT_VALID;
  valid: boolean;
}

export interface SetPaymentProcessingAction {
  type: typeof SET_PAYMENT_PROCESSING;
  processing: boolean;
}

export type PaymentIntentActionTypes =
  | SetSecretAction
  | SetPaymentReadyAction
  | SetPaymentValidAction
  | SetPaymentProcessingAction;
