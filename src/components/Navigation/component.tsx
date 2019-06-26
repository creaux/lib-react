import React, { FunctionComponent, CSSProperties } from 'react';
import { Item } from './types';
import { Svg } from '../Svg';

export interface NavigationProps {
  items: Item[];
  Brand: any;
  home?: string;
  className?: string;
  style?: CSSProperties;
}

export const Navigation: FunctionComponent<NavigationProps> = ({
  items,
  Brand,
  home = '/',
  className,
  style
}) => (
  <nav
    className={`navbar navbar-expand-lg navbar-light bg-transparent ${className}`}
    style={style}
  >
    <ul className="navbar-nav mr-auto">
      {items.map((item: Item, i) => (
        <li className="nav-item active" key={item.id || i}>
          <a className="nav-link" href={item.link}>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
    <a className="navbar-brand mr-0" href="#home">
      <Svg Svg={Brand} fill="black" link={home} />
    </a>
  </nav>
);
