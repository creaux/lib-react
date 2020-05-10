import { IInput } from "../Field/types";
import { BuilderInterface } from "@pyxismedia/lib-model";

export class PersonBuilder implements BuilderInterface<IPerson> {
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
      surname: this.surname
    };
  }
}

export interface IPerson {
  forname: IInput;
  surname: IInput;
}
