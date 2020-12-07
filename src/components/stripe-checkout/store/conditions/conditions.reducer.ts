import { ConditionsActionsTypes, ConditionsState, SET_DATA, SET_TERMS } from './conditions.type';

const initialState: ConditionsState = {
  terms: false,
  data: false,
};

export function conditionsReducer(state: ConditionsState = initialState, action: ConditionsActionsTypes) {
  switch(action.type) {
    case SET_DATA:
      return { ...state, data: action.data };
    case SET_TERMS:
      return { ...state, terms: action.terms };
    default:
      return state;
  }
}
