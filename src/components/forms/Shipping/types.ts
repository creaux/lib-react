import { IAbode, IAbodeValidated } from '../../forms/Abode';
import { IRadioStack } from '../Field/RadioStack/types';
import { ICheckbox } from '../../forms/Checkbox/types';

export interface IShippingGroups {
  delivery: IAbode;
  invoicing: IAbode;
}

export interface IShippingFields {
  terms: ICheckbox;
  data: ICheckbox;
  company: ICheckbox;
}
