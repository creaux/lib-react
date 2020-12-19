import { Step } from '../store/process/process.types';

export type OnNextStep = (step: Step) => void;
