import React, { FunctionComponent, ReactNode } from 'react';
import { NavigationScreenContent } from './navigation-screen-content.component';
import { Guard } from './utility/guard.component';
import CSSTransition from 'react-transition-group/CSSTransition';

export interface NavigationScreenProps {
  isOpen?: boolean;
  children: ReactNode;
}

export const NavigationScreen: FunctionComponent<NavigationScreenProps> = ({
  isOpen = false,
  children,
}) => {
  return (
    <CSSTransition
      in={isOpen}
      unmountOnExit
      classNames="navbar-screen"
      timeout={8900}
    >
      <div className="p-4 flex-grow-1 d-flex align-items-center justify-content-center navbar-screen">
        <Guard Component={NavigationScreenContent}>{children}</Guard>
      </div>
    </CSSTransition>
  );
};
