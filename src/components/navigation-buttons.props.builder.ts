import { ButtonProps } from '../forms/Button/component';
import { NavigationButtonsProps } from './navigation-buttons.component';

export class NavigationButtonsPropsBuilder {
  private children!: ButtonProps[];

  withButtons(buttons: ButtonProps[]): NavigationButtonsPropsBuilder {
    this.children = buttons;
    return this;
  }

  build(): NavigationButtonsProps {
    return {
      children: this.children,
    };
  }
}
