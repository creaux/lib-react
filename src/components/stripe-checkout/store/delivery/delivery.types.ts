export interface DeliveryState {
  street: string;
  streetNo: string;
  postcode: string;
  city: string;
  country: string;
  valid: boolean;
  disabled: boolean;
}

export interface DeliveryStore {
  street: string;
  streetNo: string;
  postcode: string;
  city: string;
  country: string;
}

export interface DeliveryValid {
  valid: boolean;
}

export const SET_DELIVERY = 'SET_DELIVERY';
export const SET_DELIVERY_VALID = 'SET_DELIVERY_VALID';
export const SET_DELIVERY_DISABLED = 'SET_DELIVERY_DISABLED';

export interface SetDeliveryAction {
  type: typeof SET_DELIVERY;
  delivery: DeliveryStore;
}

export interface SetDeliveryValidAction {
  type: typeof SET_DELIVERY_VALID;
  valid: boolean;
}

export interface SetDeliveryDisabledAction {
  type: typeof SET_DELIVERY_DISABLED;
  disabled: boolean;
}

export type DeliveryActionTypes =
  | SetDeliveryAction
  | SetDeliveryValidAction
  | SetDeliveryDisabledAction;
