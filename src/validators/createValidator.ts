import { Validation } from "./validator";

export const createValidator = (regex: RegExp) => (
  message: string
): Validation => ({
  validator: (value: string | number) => !regex.test(value.toString()),
  message
});
