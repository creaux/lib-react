import React, { FunctionComponent } from 'react';

export interface NavigationClaimProps {
  children: string;
}

export const NavigationClaim: FunctionComponent<NavigationClaimProps> = ({
  children,
}) => <div className="navbar-brand">{children}</div>;
