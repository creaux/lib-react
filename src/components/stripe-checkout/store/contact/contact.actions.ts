import {
  ContactState,
  SET_CONTACT,
  SET_CONTACT_VALID,
  SetContactAction,
  SetContactValidAction,
} from './contact.types';

export const setContact = (contact: ContactState): SetContactAction => ({
  type: SET_CONTACT,
  contact,
});

export const setContactValid = (valid: boolean): SetContactValidAction => ({
  type: SET_CONTACT_VALID,
  valid,
});
