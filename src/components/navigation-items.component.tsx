import React, { FunctionComponent } from 'react';
import cx from 'classnames';

export interface NavigationItem {
  title: string;
  link: string;
  id?: string;
}

export interface NavigationItemsProps {
  children: NavigationItem[];
  active?: number;
}

export const NavigationItems: FunctionComponent<NavigationItemsProps> = ({
  children,
  active,
}) => (
  <ul className="navbar-nav align-items-center">
    {children.map((item: NavigationItem, i) => (
      <li
        className={cx('nav-item', {
          active: i === active,
        })}
        key={item.id || i}
      >
        <a className={cx('nav-link')} href={item.link}>
          {item.title}
        </a>
      </li>
    ))}
  </ul>
);
