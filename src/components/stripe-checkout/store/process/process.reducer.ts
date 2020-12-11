import { ProcessActions, ProcessState, SET_STEP } from './process.types';
import { Step } from '../../stripe-checkout.component';

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
