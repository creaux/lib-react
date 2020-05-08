import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface IRadio {
  title: string;
  icon: IconDefinition;
  id: string;
}

export class IRadioStack {
  constructor(
    public id: string,
    public radios: IRadio[],
    public active?: string
  ) {}
}
