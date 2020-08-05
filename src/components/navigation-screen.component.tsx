import React, { FunctionComponent, ReactNode } from 'react';
import { Conditional } from './Conditional/component';
import { Viewport } from './viewport.component';

export interface NavigationScreenProps {
  isOpen: boolean;
  children: ReactNode;
}

export const NavigationScreen: FunctionComponent<NavigationScreenProps> = ({
  isOpen,
  children,
}) => {
  return (
    <Conditional
      condition={isOpen}
      when={() => (
        <Viewport>
          <div className="p-4">{children}</div>
        </Viewport>
      )}
    ></Conditional>
  );
};
