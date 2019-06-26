import { IInputData } from '../../../forms/Input/types';
import { ISelect } from '../../../forms/Select/types';

export interface IAddress {
  street: IInputData;
  streetNo: IInputData;
  postcode: IInputData;
  cities: ISelect;
  countries: ISelect;
}
