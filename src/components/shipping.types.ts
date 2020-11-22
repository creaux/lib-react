import { IAbode } from '../forms/Abode/types';
import { ICheckbox } from '../forms/Checkbox/types';

export interface ShippingGroups {
  delivery: IAbode;
  invoicing: IAbode;
}

export interface ShippingFields {
  terms: ICheckbox;
  data: ICheckbox;
  company: ICheckbox;
}
