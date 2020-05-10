import { OnChange } from "../../types/form";
import { Messages } from "./hoc/validators/types";
import { ValidatorProps } from "./hoc/validators/validator/props";

export enum InputTypeEnum {
  TEXT = "text",
  NUMBER = "text",
  EMAIL = "email"
}

export class InputBuilder {
  private id!: string;
  private value!: string;

  withId(id: string) {
    this.id = id;
  }

  withValue(value: string) {
    this.value = value;
  }

  build(): IInput {
    return {
      id: this.id,
      value: this.value
    };
  }
}

export interface IInput {
  id: string;
  value: string;
}

export interface IInputData extends IInput {
  datalist?: (string)[];
}

export type OnValidChange = (valid: boolean) => void;

export interface FieldOuterProps {
  placeholder: string;
  label?: string;
  value: string;
  id: string;
  onChange: OnChange;
  onValidChange: OnValidChange;
  messages: Messages;
  options?: IOption[];
}

export interface TypeProps {
  type: InputTypeEnum;
}

export enum FieldType {
  SELECT,
  INPUT
}

export interface IOption {
  id: string;
  title: string;
  value: string;
}

export interface ISelect {
  id: string;
  value: string;
  options: IOption[];
}
