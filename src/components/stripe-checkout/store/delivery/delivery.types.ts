export interface DeliveryState {
  street: string;
  streetNo: string;
  postcode: string;
  city: string;
  country: string;
}

export interface Delivery {
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

export interface SetDeliveryAction {
  type: typeof SET_DELIVERY;
  delivery: DeliveryState;
}

export interface SetDeliveryValidAction {
  type: typeof SET_DELIVERY_VALID;
  valid: boolean;
}

export type DeliveryActionTypes = SetDeliveryAction | SetDeliveryValidAction;
