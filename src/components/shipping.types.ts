import { IAbode } from '../forms/Abode/types';
import { ICheckbox } from '../forms/Checkbox/types';

export interface IShippingGroups {
  delivery: IAbode;
  invoicing: IAbode;
}

export interface IShippingFields {
  terms: ICheckbox;
  data: ICheckbox;
  company: ICheckbox;
}
