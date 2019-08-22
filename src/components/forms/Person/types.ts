import { IInput } from '../Input/types';
import { Messages } from '../../../validators/types';

export interface IPerson {
  forname: IInput & { messages: Messages };
  surname: IInput & { messages: Messages };
}
