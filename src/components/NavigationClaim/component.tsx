import React, { FunctionComponent } from 'react';

export interface NavigationClaimProps {
  children: string;
}

export const NavigationClaim: FunctionComponent<NavigationClaimProps> = ({ children }) => (
  <a className="navbar-brand">{children}</a>
);
