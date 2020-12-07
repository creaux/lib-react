export interface ConditionsState {
  terms: boolean;
  data: boolean;
}

export interface Data {
  data: boolean;
}

export interface Terms {
  terms: boolean;
}

export const SET_DATA = 'SET_DATA';
export const SET_TERMS = 'SET_TERMS';

export interface SetDataAction {
  type: typeof SET_DATA;
  data: boolean;
}

export interface SetTermsAction {
  type: typeof SET_TERMS;
  terms: boolean;
}

export type ConditionsActionsTypes = SetTermsAction | SetDataAction;
