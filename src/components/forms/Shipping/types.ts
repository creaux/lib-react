import { IAbode } from '../../forms/Abode';
import { IRadioStack } from '../../forms/RadioStack/types';
import { ICheckbox } from '../../forms/Checkbox/types';

export interface IShippingGroups {
  delivery: IAbode;
  invoicing: IAbode;
}

export interface IShippingFields {
  distribution: IRadioStack;
  terms: ICheckbox;
  data: ICheckbox;
}
