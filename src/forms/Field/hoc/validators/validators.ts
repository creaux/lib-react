import { createValidator } from './createValidator';

export class ValidatorPatterns {
  public static readonly regExpEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  public static readonly regExpText = /^[a-zA-Z\s]+$/i;
  public static readonly regExpNumber = /^[0-9\s]+$/i;
  public static readonly regExpAlpha = /^[A-Z0-9\s]+$/i;
  public static readonly regExpPhone = /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/i;
}

export class Validators {
  public static readonly empty = createValidator();
  public static readonly isNotEmail = createValidator(
    ValidatorPatterns.regExpEmail
  );
  public static readonly isEmail = createValidator(
    ValidatorPatterns.regExpEmail,
    false
  );
  public static readonly isNotText = createValidator(
    ValidatorPatterns.regExpText
  );
  public static readonly isText = createValidator(
    ValidatorPatterns.regExpText,
    false
  );
  public static readonly isNotNumber = createValidator(
    ValidatorPatterns.regExpNumber
  );
  public static readonly isNumber = createValidator(
    ValidatorPatterns.regExpNumber,
    false
  );
  public static readonly isNotAlpha = createValidator(
    ValidatorPatterns.regExpAlpha
  );
  public static readonly isAlpha = createValidator(
    ValidatorPatterns.regExpAlpha,
    false
  );
  public static readonly isNotPhone = createValidator(
    ValidatorPatterns.regExpPhone
  );
  public static readonly isPhone = createValidator(
    ValidatorPatterns.regExpPhone,
    false
  );
}
