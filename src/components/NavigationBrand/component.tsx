import React, { ReactNode, FunctionComponent } from 'react';
import { Svg } from '../Svg';

interface NavigationBrandProps {
  brand: ReactNode;
  link: string;
}

export const NavigationBrand: FunctionComponent<NavigationBrandProps> = ({ brand, link }) => (
  <a className="navbar-brand mr-0" href="#home">
    <Svg Svg={brand} link={link} fill="black" />
  </a>
);
