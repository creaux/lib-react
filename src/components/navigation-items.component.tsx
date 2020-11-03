import React, { FunctionComponent } from 'react';
import cx from 'classnames';

export interface NavigationItem {
  title: string;
  link: string;
  id?: string;
}

export interface NavigationItemsProps {
  items: NavigationItem[];
  active?: number;
  onClick: (link: string) => void;
}

export const NavigationItems: FunctionComponent<NavigationItemsProps> = ({
  items,
  active,
  onClick: handleClick,
}) => (
  <ul className="navbar-nav align-items-center d-none d-lg-flex">
    {items.map((item: NavigationItem, i) => (
      <li
        className={cx('nav-item', {
          active: i === active,
        })}
        key={item.id || i}
      >
        <button
          className={cx('nav-link', 'btn', 'btn-link')}
          onClick={() => handleClick(item.link)}
        >
          {item.title}
        </button>
      </li>
    ))}
  </ul>
);
