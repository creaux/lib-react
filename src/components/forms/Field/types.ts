import { OnChange } from '../../types/form';
import { Messages } from './hoc/validators/types';

export enum InputTypeEnum {
  TEXT = 'text',
  NUMBER = 'text',
  EMAIL = 'email',
}

export class InputBuilder {
  private id!: string;
  private value!: string;
  private valid?: boolean;

  withId(id: string) {
    this.id = id;
    return this;
  }

  withValue(value: string) {
    this.value = value;
    return this;
  }

  withValid(valid: boolean) {
    this.valid = valid;
    return this;
  }

  build(): IInput {
    return {
      id: this.id,
      value: this.value,
      valid: this.valid,
    };
  }
}

export interface IInput {
  id: string;
  value: string;
  valid?: boolean;
}

export interface IInputData extends IInput {
  datalist?: string[];
}

export type OnValidChange = (valid: boolean) => void;

export interface FieldOuterProps {
  placeholder?: string;
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
  INPUT,
}

export class OptionBuilder {
  private id!: string;
  private value!: string;
  private title!: string;

  withId(id: string) {
    this.id = id;
    return this;
  }

  withValue(value: string) {
    this.value = value;
    return this;
  }

  withTitle(title: string) {
    this.title = title;
    return this;
  }

  build(): IOption {
    return {
      id: this.id,
      value: this.value,
      title: this.title,
    };
  }
}

export interface IOption {
  id: string;
  title: string;
  value: string;
}

export class SelectBuilder {
  private id!: string;
  private value!: string;
  private options!: IOption[];

  withId(id: string) {
    this.id = id;
    return this;
  }

  withValue(value: string) {
    this.value = value;
    return this;
  }

  withOptions(options: IOption[]) {
    this.options = options;
    return this;
  }

  build(): ISelect {
    return {
      id: this.id,
      value: this.value,
      options: this.options,
    };
  }
}

export interface ISelect {
  id: string;
  value: string;
  options: IOption[];
  valid?: boolean;
}
