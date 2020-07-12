import React, { FunctionComponent, CSSProperties, ReactNode } from 'react';
import { Guard } from '../Guard';
import { NavigationBrand } from '../NavigationBrand';
import { NavigationItems } from '../NavigationItems';
import {
  NavigationButtons,
  NavigationButtonsProps
} from '../NavigationButtons/component';
import { NavigationItemsProps } from '../NavigationItems/component';
import { NavigationClaim } from '../NavigationClaim';

export interface NavigationProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export const Navigation: FunctionComponent<NavigationProps> = ({
  className,
  style,
  children
}) => (
  <nav
    className={`navbar navbar-expand-lg navbar-light bg-transparent ${className}`}
    style={style}
  >
    <Guard Component={NavigationClaim}>{children}</Guard>
    <Guard<NavigationItemsProps>
      Component={NavigationItems}
      when={['items', 'length']}
    >
      {children}
    </Guard>
    <Guard Component={NavigationBrand}>{children}</Guard>
    <Guard<NavigationButtonsProps>
      Component={NavigationButtons}
      when={['buttons', 'length']}
    >
      {children}
    </Guard>
  </nav>
);
