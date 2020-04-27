import React, { ComponentType, ReactElement } from 'react';
import { Messages } from '../types';

export type Validator = (message: string) => Validation;

export interface Validation {
  validator: (value: string | number) => boolean;
  message: string;
}

export class ValidatorModel {
  constructor(
    public readonly validations: Validation[],
    public readonly message: string
  ) {}
}

export function validator<O extends { messages: Messages }>(
  validator: Validator
) {
  type Output = Pick<O, Exclude<keyof O, 'messages'>> & {
    validator: ValidatorModel;
  };

  return function(Component: ComponentType<Output>) {
    return function(props: O): ReactElement<Output> {
      const { messages, ...rest } = props;

      if (
        !messages ||
        messages &&
        !messages.valid || !messages.valid
      ) {
        throw new Error(
          `${Component.name}: Property messages has to be provided per each field.`
        );
      }

      const validators = new ValidatorModel(
        [validator(messages.invalid)],
        messages.valid
      );

      const withValidator = { ...rest, validator: validators };

      return <Component {...withValidator} />;
    };
  };
}
