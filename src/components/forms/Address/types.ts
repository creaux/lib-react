import { IInputData, ISelect } from "../Field/types";

export interface IAddress {
  street: IInputData;
  streetNo: IInputData;
  postcode: IInputData;
  cities: Omit<ISelect, "valid">;
  countries: Omit<ISelect, "valid">;
}
