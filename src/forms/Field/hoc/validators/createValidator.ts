import { Validation } from './validator';
import { Message } from './types';

export function createValidator(): (message: Message) => Validation;
export function createValidator(
  regex: RegExp
): (message: Message) => Validation;
export function createValidator(
  regex: RegExp,
  negate: boolean
): (message: Message) => Validation;
export function createValidator(regexp?: RegExp, negate = true) {
  return (message: Message): Validation => {
    if (regexp instanceof RegExp) {
      return {
        validator(value: string) {
          const result = regexp.test(value.toString());
          if (negate) {
            return !result;
          }
          return result;
        },
        message,
      };
    }
    return {
      validator() {
        if (negate) {
          return false;
        }
        return true;
      },
      message,
    };
  };
}
