import React, { FunctionComponent } from 'react';

export interface NavigationItem {
  title: string;
  link: string;
  id?: string;
}

export interface NavigationItemsProps {
  items: NavigationItem[];
}

export const NavigationItems: FunctionComponent<NavigationItemsProps> = ({
  items,
}) => (
  <ul className="navbar-nav mr-auto">
    {items.map((item: NavigationItem, i) => (
      <li className="nav-item active" key={item.id || i}>
        <a className="nav-link" href={item.link}>
          {item.title}
        </a>
      </li>
    ))}
  </ul>
);
