export enum InputTypeEnum {
  TEXT = 'text',
  NUMBER = 'number'
}

export interface IInput {
  id: string;
  label: string;
  value: string;
  placeholder?: string;
  type?: InputTypeEnum;
}

export interface IInputData extends IInput {
  datalist?: (string)[];
}
