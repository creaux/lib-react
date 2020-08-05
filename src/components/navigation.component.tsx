import React, {
  FunctionComponent,
  MutableRefObject,
  ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { Guard } from './Guard/index';
import { NavigationBrand } from './navigation-brand.component';
import {
  NavigationItems,
  NavigationItemsProps,
} from './navigation-items.component';
import {
  NavigationButtons,
  NavigationButtonsProps,
} from './navigation-buttons.component';
import { NavigationClaim } from './navigation-claim.component';
import cx from 'classnames';
import { BACKGROUND_COLOR } from '../schema/background-color.enum';
import { JUSTIFY_CONTENT } from '../schema/justify-content.enum';
import { FIXED } from '../schema/fixed.enum';
import {
  NavigationToggler,
  NavigationTogglerProps,
} from './navigation-toggler.component';
import {
  NavigationScreen,
  NavigationScreenProps,
} from './navigation-screen.component';

export enum NAVIGATION_SCHEME {
  DARK = 'navbar-dark',
  LIGHT = 'navbar-light',
}

export interface NavigationProps {
  children?: ReactNode;
  background?: BACKGROUND_COLOR;
  navigationScheme?: NAVIGATION_SCHEME;
  justifyContent?: JUSTIFY_CONTENT;
  fixed?: FIXED;
  opacity?: number;
}

const useOpacity = (opacity?: number) => {
  const ref = useRef() as MutableRefObject<HTMLBaseElement>;
  const [state, setState] = useState(true);

  if (opacity) {
    document.documentElement.style.setProperty(
      '--navbar-opacity',
      opacity.toString()
    );
  }

  useLayoutEffect(() => {
    if (ref && ref.current && opacity) {
      const backgroundColor = window
        .getComputedStyle((ref.current as unknown) as Element)
        .getPropertyValue('background-color');
      document.documentElement.style.setProperty(
        '--navbar-background-color',
        backgroundColor
      );
      setState(false);
    }
    // Will render based on change of isOpacity (once)
    // No need to check for state in if condition
  }, [opacity, ref]);

  return [state, ref];
};

export const Navigation: FunctionComponent<NavigationProps> = ({
  children,
  background = BACKGROUND_COLOR.LIGHT,
  navigationScheme = NAVIGATION_SCHEME.LIGHT,
  justifyContent,
  fixed,
  opacity,
}) => {
  // Moving background to replacing div as background doesn't support opacity without modifying color
  const [isNotOpacity, opacityRef] = useOpacity(opacity);

  return (
    <nav
      className={cx(
        'navbar',
        'navbar-expand-lg',
        isNotOpacity ? background : null,
        navigationScheme,
        justifyContent,
        fixed
      )}
      ref={(opacityRef as unknown) as MutableRefObject<HTMLBaseElement>}
    >
      <Guard Component={NavigationBrand}>{children}</Guard>
      <Guard Component={NavigationClaim}>{children}</Guard>
      <Guard<NavigationItemsProps>
        Component={NavigationItems}
        when={['items', 'length']}
      >
        {children}
      </Guard>
      <Guard<NavigationButtonsProps>
        Component={NavigationButtons}
        when={['buttons', 'length']}
      >
        {children}
      </Guard>
      <Guard<NavigationTogglerProps> Component={NavigationToggler}>
        {children}
      </Guard>
      <Guard<NavigationScreenProps> Component={NavigationScreen}>
        {children}
      </Guard>
    </nav>
  );
};
