import { createValidator } from "./createValidator";

class Patterns {
  public static readonly regExpEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  public static readonly regExpText = /^[a-zA-Z\s]+$/i;
  public static readonly regExpNumber = /^[0-9\s]+$/i;
  public static readonly regExpAlpha = /^[A-Z0-9\s]+$/i;
}

export class Validators {
  public static readonly email = createValidator(Patterns.regExpEmail);
  public static readonly text = createValidator(Patterns.regExpText);
  public static readonly number = createValidator(Patterns.regExpNumber);
  public static readonly alpha = createValidator(Patterns.regExpAlpha);
}
