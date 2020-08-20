import React, { FunctionComponent, ReactNode } from 'react';
import { Svg } from './Svg/index';

export enum NavigationBrandColor {
  DARK = 'black',
  LIGHT = 'white',
}

export interface NavigationBrandProps {
  brand: ReactNode;
  link: string;
  color?: NavigationBrandColor;
  width?: number;
}

export const NavigationBrand: FunctionComponent<NavigationBrandProps> = ({
  brand,
  link,
  color = NavigationBrandColor.DARK,
  width,
}) => (
  <a className="navbar-brand" href="#home">
    <Svg Svg={brand} link={link} fill={color} width={width} />
  </a>
);
