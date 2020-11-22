export class CheckboxBuilder {
  private checked!: boolean;
  private id!: string;
  private title!: string;

  withChecked(checked: boolean) {
    this.checked = checked;
    return this;
  }

  withId(id: string) {
    this.id = id;
    return this;
  }

  withTitle(title: string) {
    this.title = title;
    return this;
  }

  build(): ICheckbox {
    return {
      id: this.id,
      checked: this.checked,
      title: this.title,
    };
  }
}

export class ICheckbox {
  constructor(
    public checked: boolean,
    public id: string,
    public title: string
  ) {}
}
