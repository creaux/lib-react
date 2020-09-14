import React, { FunctionComponent, ReactNode } from 'react';
import cx from 'classnames';

export interface NavigationBrandProps {
  children: ReactNode;
  link: string;
}

export const NavigationBrand: FunctionComponent<NavigationBrandProps> = ({
  children,
  link,
}) => (
  <button
    className={cx('navbar-brand', 'btn', 'btn-link')}
    href={link}
    style={{ width: '100px' }}
  >
    {children}
  </button>
);
