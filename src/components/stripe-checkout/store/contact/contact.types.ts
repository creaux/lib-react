export interface ContactState {
  forename: string;
  surname: string;
  email: string;
  phone: string;
  valid: boolean;
}

export interface Contact {
  forename: string;
  surname: string;
  email: string;
  phone: string;
}

export interface ContactValid {
  valid: boolean;
}

export const SET_CONTACT = 'SET_CONTACT';
export const SET_CONTACT_VALID = 'SET_CONTACT_VALID';

export interface SetContactAction {
  type: typeof SET_CONTACT;
  contact: Contact;
}

export interface SetContactValidAction {
  type: typeof SET_CONTACT_VALID;
  valid: boolean;
}

export type ContactActionTypes = SetContactAction | SetContactValidAction;
