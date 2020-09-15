import React, { FunctionComponent, ReactNode } from 'react';
import cx from 'classnames';
import { Guard } from './guard.component';
import { Render } from './render.component';

export interface NavigationBrandProps {
  children: ReactNode;
  onClick: () => void;
  color?: string;
}

export const NavigationBrand: FunctionComponent<NavigationBrandProps> = ({
  children,
  onClick: handleClick,
  color = 'white',
}) => (
  <button
    className={cx('navbar-brand', 'btn', 'btn-link')}
    style={{ width: '100px' }}
    onClick={() => handleClick()}
  >
    <Guard Component={Render} props={{ fill: color }} mandatory>
      {children}
    </Guard>
  </button>
);
