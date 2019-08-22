import { IInputData } from '../Input/types';
import { ISelect } from '../Select/types';
import { Messages } from "../../../validators/types";

export interface IAddress {
  street: IInputData & { messages: Messages };
  streetNo: IInputData & { messages: Messages };
  postcode: IInputData & { messages: Messages };
  cities: ISelect;
  countries: ISelect;
}
