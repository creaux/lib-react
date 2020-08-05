import React, { FunctionComponent } from 'react';
import { Conditional } from './Conditional/component';
import { Viewport } from './viewport.component';

export interface NavigationScreenProps {
  isOpen: boolean;
}

export const NavigationScreen: FunctionComponent<NavigationScreenProps> = ({
  isOpen,
}) => {
  return (
    <Conditional
      condition={isOpen}
      when={() => <Viewport>Hello</Viewport>}
    ></Conditional>
  );
};
