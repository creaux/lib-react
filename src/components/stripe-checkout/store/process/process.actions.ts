import { SET_STEP, SetStepAction, Step } from './process.types';

export const setStep = (step: Step): SetStepAction => ({
  type: SET_STEP,
  step,
});
