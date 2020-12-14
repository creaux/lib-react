export enum Step {
  DELIVERY,
  BILLING,
}

export interface ProcessState {
  step: Step;
}

export const SET_STEP = 'SET_STEP';

export interface SetStepAction {
  type: typeof SET_STEP;
  step: Step;
}

export type ProcessActions = SetStepAction;
