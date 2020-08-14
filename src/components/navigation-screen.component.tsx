import React, { FunctionComponent, ReactNode } from 'react';
import { Conditional } from './Conditional/component';
import { NavigationScreenContent } from './navigation-screen-content.component';
import { Guard } from './Guard/component';

export interface NavigationScreenProps {
  isOpen?: boolean;
  children: ReactNode;
}

export const NavigationScreen: FunctionComponent<NavigationScreenProps> = ({
  isOpen = false,
  children,
}) => {
  return (
    <Conditional
      condition={isOpen}
      when={() => (
        <div className="p-4 flex-grow-1 d-flex align-items-center justify-content-center navbar-screen">
          <Guard Component={NavigationScreenContent}>{children}</Guard>
        </div>
      )}
    />
  );
};
