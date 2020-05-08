import { IInput, IInputData, ISelect } from "../Field/types";
import { Messages } from "../Field/hoc/validators/types";

export interface IAbode {
  forname: IInput;
  surname: IInput;
  company?: IInput;
  vat?: IInput;
  street: IInputData;
  streetNo: IInputData;
  postcode: IInputData;
  cities: ISelect;
  countries: ISelect;
}
