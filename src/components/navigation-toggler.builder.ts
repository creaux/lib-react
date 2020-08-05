import { NavigationTogglerProps } from './navigation-toggler.component';

export class NavigationTogglerPropsBuilder {
  private onToggle!: () => void;

  withOnToggle(fn: () => void): NavigationTogglerPropsBuilder {
    this.onToggle = fn;
    return this;
  }

  build(): NavigationTogglerProps {
    return {
      onToggle: this.onToggle,
    };
  }
}
