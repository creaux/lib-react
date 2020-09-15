import { NavigationBrandProps } from './navigation-brand.component';
import { ReactNode } from 'react';

export class NavigationBrandPropsBuilder {
  private children!: ReactNode;
  private onClick!: () => void;
  private color!: string;

  withBrand(brand: ReactNode): NavigationBrandPropsBuilder {
    this.children = brand;
    return this;
  }

  withOnClick(onClick: () => void): NavigationBrandPropsBuilder {
    this.onClick = onClick;
    return this;
  }

  withColor(color: string): NavigationBrandPropsBuilder {
    this.color = color;
    return this;
  }

  public build(): NavigationBrandProps {
    return {
      children: this.children,
      onClick: this.onClick,
      color: this.color
    };
  }
}
