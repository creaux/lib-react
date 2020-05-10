import { BuilderInterface } from "@pyxismedia/lib-model";

export class CheckboxBuilder implements BuilderInterface<ICheckbox> {
  private checked!: boolean;
  private id!: string;

  withChecked(checked: boolean) {
    this.checked = checked;
  }

  withId(id: string) {
    this.id = id;
  }

  build(): ICheckbox {
    return {
      id: this.id,
      checked: this.checked
    };
  }
}

export class ICheckbox {
  constructor(public checked: boolean, public id: string) {}
}
