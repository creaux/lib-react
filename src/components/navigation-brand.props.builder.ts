import { NavigationBrandProps } from './navigation-brand.component';
import { ReactNode } from 'react';

export class NavigationBrandPropsBuilder {
  private brand!: ReactNode;
  private link!: string;

  withBrand(brand: ReactNode): NavigationBrandPropsBuilder {
    this.brand = brand;
    return this;
  }

  withLink(link: string): NavigationBrandPropsBuilder {
    this.link = link;
    return this;
  }

  public build(): NavigationBrandProps {
    return {
      brand: this.brand,
      link: this.link,
    };
  }
}
