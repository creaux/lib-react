import { ProcessActions, ProcessState, SET_STEP, Step } from './process.types';

const initialState: ProcessState = {
  step: Step.DELIVERY,
};

export function processReducer(
  state: ProcessState = initialState,
  action: ProcessActions
) {
  switch (action.type) {
    case SET_STEP:
      return { ...state, step: action.step };
    default:
      return state;
  }
}
