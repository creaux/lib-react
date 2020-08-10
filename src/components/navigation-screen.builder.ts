import { ReactNode } from 'react';

export class NavigationScreenPropsBuilder {
  private isOpen!: boolean;
  private children!: ReactNode;

  withIsOpen(isOpen: boolean): NavigationScreenPropsBuilder {
    this.isOpen = isOpen;
    return this;
  }

  withChildren(children: ReactNode): NavigationScreenPropsBuilder {
    this.children = children;
    return this;
  }

  build() {
    return {
      isOpen: this.isOpen,
      children: this.children,
    };
  }
}
