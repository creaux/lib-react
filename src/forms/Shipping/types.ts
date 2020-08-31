import { IAbode, IAbodeValidated } from '../Abode';
import { IRadioStack } from '../Field/RadioStack/types';
import { ICheckbox } from '../Checkbox/types';

export interface IShippingGroups {
  delivery: IAbode;
  invoicing: IAbode;
}

export interface IShippingFields {
  terms: ICheckbox;
  data: ICheckbox;
  company: ICheckbox;
}
