import React, { ComponentType, ReactElement } from 'react';
import { Message, MessageType } from '../types';
import { MessagesProps, ValidatorProps } from './props';

export type Validator = (message: Message) => Validation;

export class ValidationBuilder {
  private validator!: (value: string) => boolean;
  private message!: Message;

  withValidator(validator: (value: string) => boolean) {
    this.validator = validator;
    return this;
  }

  withMessage(message: Message) {
    this.message = message;
    return this;
  }

  build(): Validation {
    return {
      validator: this.validator,
      message: this.message,
    };
  }
}

export interface Validation {
  validator: (value: string) => boolean;
  message: Message;
}

export function validator<O extends ValidatorProps & MessagesProps>(
  ...validatorDefinitions: [
    [(message: Message) => Validation, MessageType],
    [(message: Message) => Validation, MessageType],
    [(message: Message) => Validation, MessageType]
  ]
) {
  type Output = Pick<O, Exclude<keyof O, 'messages'>> & {
    validator: [Validation, Validation, Validation];
  };

  return function (Component: ComponentType<Output>) {
    return function (props: O): ReactElement<Output> {
      const { messages, ...rest } = props;

      let validators: [
        Validation,
        Validation,
        Validation
      ] = ([] as unknown) as [Validation, Validation, Validation];

      if (!Array.isArray(messages)) {
        throw new Error(
          `${Component.name}: Property messages has to be provided per each field.`
        );
      }

      for (const [validator, type] of validatorDefinitions) {
        validators.push(
          validator({
            type,
            value: messages[type],
          })
        );
      }

      const withValidator = { ...rest, validator: validators };

      return <Component {...withValidator} />;
    };
  };
}
