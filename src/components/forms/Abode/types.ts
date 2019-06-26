import { IInput, IInputData } from '../../../forms/Input/types';
import { ISelect } from '../../../forms/Select/types';

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
