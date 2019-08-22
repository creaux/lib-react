import { Validation } from '../components/forms/Input/hoc/validator';

export const createValidator = (regex: RegExp) => (
  message: string
): Validation => ({
  validator: (value: string | number) => !regex.test(value.toString()),
  message
});
