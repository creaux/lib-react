import { IInput, IInputData } from "../Input/types";
import { ISelect } from '../Select/types';
import { Messages } from "../../../validators/types";

export interface IAbode {
  forname: IInput & { messages: Messages };
  surname: IInput & { messages: Messages };
  company?: IInput & { messages: Messages };
  vat?: IInput & { messages: Messages };
  street: IInputData & { messages: Messages };
  streetNo: IInputData & { messages: Messages };
  postcode: IInputData & { messages: Messages };
  cities: ISelect;
  countries: ISelect;
}
