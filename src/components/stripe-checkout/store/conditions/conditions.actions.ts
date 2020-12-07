import { SET_DATA, SET_TERMS } from './conditions.type';

export const setTerms = (terms: boolean) => ({
  type: SET_TERMS,
  terms,
});

export const setData = (data: boolean) => ({
  type: SET_DATA,
  data
});
