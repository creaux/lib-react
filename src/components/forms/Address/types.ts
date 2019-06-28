import { IInputData } from '../Input/types';
import { ISelect } from '../Select/types';

export interface IAddress {
  street: IInputData;
  streetNo: IInputData;
  postcode: IInputData;
  cities: ISelect;
  countries: ISelect;
}
