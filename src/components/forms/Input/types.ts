export enum InputTypeEnum {
  TEXT = 'text',
  NUMBER = 'number',
  EMAIL = 'email'
}

export interface IInput {
  id: string;
  label?: string;
  value: string;
  placeholder: string;
}

export interface IInputTyped extends IInput {
  type: InputTypeEnum;
}

export interface IInputData extends IInput {
  datalist?: (string)[];
}

export interface IInputDataTyped extends IInputTyped {
  datalist?: (string)[];
}

export type OnValidChange = (valid: boolean) => void;
