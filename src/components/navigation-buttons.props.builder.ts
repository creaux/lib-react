import { ButtonProps } from './forms/Button/component';
import { NavigationButtonsProps } from './navigation-buttons.component';

export class NavigationButtonsPropsBuilder {
  private buttons!: ButtonProps[];

  withButtons(buttons: ButtonProps[]): NavigationButtonsPropsBuilder {
    this.buttons = buttons;
    return this;
  }

  build(): NavigationButtonsProps {
    return {
      buttons: this.buttons,
    };
  }
}
