import { IInput } from '../Field/types';

export class PersonBuilder {
  private forname!: IInput;
  private surname!: IInput;

  withForname(forname: IInput) {
    this.forname = forname;
  }

  withSurname(surname: IInput) {
    this.surname = surname;
  }

  build(): IPerson {
    return {
      forname: this.forname,
      surname: this.surname,
    };
  }
}

export interface IPerson {
  forname: IInput;
  surname: IInput;
}
