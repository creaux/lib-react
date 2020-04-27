import { IInput } from "../Input/types";
import { Messages } from "../../../validators/types";

export interface ICompany {
  company: IInput & { messages: Messages };
  vat: IInput & { messages: Messages };
}
