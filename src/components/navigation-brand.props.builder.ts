import { NavigationBrandProps } from './navigation-brand.component';
import { ReactNode } from 'react';

export class NavigationBrandPropsBuilder {
  private children!: ReactNode;
  private link!: string;

  withBrand(brand: ReactNode): NavigationBrandPropsBuilder {
    this.children = brand;
    return this;
  }

  withLink(link: string): NavigationBrandPropsBuilder {
    this.link = link;
    return this;
  }

  public build(): NavigationBrandProps {
    return {
      children: this.children,
      link: this.link,
    };
  }
}
