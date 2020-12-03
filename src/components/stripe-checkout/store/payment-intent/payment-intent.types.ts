export interface PaymentIntentResponse {
  client_secret: string;
}

export interface PaymentIntentState {
  secret: string;
}

export const SET_SECRET = 'SET_SECRET';

export interface SetSecretAction {
  type: typeof SET_SECRET;
  secret: string;
}

export type PaymentIntentActionTypes = SetSecretAction;
