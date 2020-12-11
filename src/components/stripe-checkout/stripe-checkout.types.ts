import { Step } from './stripe-checkout.component';

export type OnNextStep = (step: Step) => void;
