import {
  ContactActionTypes,
  ContactState,
  SET_CONTACT,
  SET_CONTACT_VALID,
} from './contact.types';

const initialState: ContactState = {
  email: '',
  phone: '',
  valid: false,
  forename: '',
  surname: '',
};

export function contactReducer(
  state: ContactState = initialState,
  action: ContactActionTypes
): ContactState {
  switch (action.type) {
    case SET_CONTACT:
      return { ...state, ...action.contact };
    case SET_CONTACT_VALID:
      return { ...state, valid: action.valid };
    default:
      return state;
  }
}
