import React, { FunctionComponent, ReactNode } from 'react';

export interface NavigationBrandProps {
  children: ReactNode;
  link: string;
}

export const NavigationBrand: FunctionComponent<NavigationBrandProps> = ({
  children,
  link,
}) => (
  <a className="navbar-brand" href={link} style={{ width: '100px' }}>
    {children}
  </a>
);
