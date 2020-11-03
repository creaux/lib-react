import React, { FunctionComponent, ReactNode } from 'react';
import cx from 'classnames';
import { Guard } from './guard.component';
import { Render } from './render.component';

export interface NavigationBrandProps {
  children: ReactNode;
  onClick: (link: string) => void;
  color?: string;
  link?: string;
}

export const NavigationBrand: FunctionComponent<NavigationBrandProps> = ({
  children,
  onClick: handleClick,
  color = 'white',
  link = '/',
}) => (
  <button
    className={cx('navbar-brand', 'btn', 'btn-link')}
    style={{ width: '100px' }}
    onClick={() => handleClick(link)}
  >
    <Guard Component={Render} props={{ fill: color }} mandatory>
      {children}
    </Guard>
  </button>
);
