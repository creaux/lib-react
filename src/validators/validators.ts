import { createValidator } from "./createValidator";

export class Validators {
  public static readonly regExpEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  public static readonly regExpText = /^[a-zA-Z\s]*$/i;
  public static readonly email = createValidator(Validators.regExpEmail);
  public static readonly text = createValidator(Validators.regExpText);
}
