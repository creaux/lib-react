import { SET_STEP, SetStepAction } from './process.types';
import { Step } from '../../stripe-checkout.component';

export const setStep = (step: Step): SetStepAction => ({
  type: SET_STEP,
  step,
});
