import React, { FunctionComponent } from 'react';

export interface NavigationClaimProps {
  children: string;
}

export const NavigationClaim: FunctionComponent<NavigationClaimProps> = ({
  children
}) => <button className="navbar-brand">{children}</button>;
