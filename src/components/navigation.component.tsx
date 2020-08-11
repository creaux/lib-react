import React, {
  FunctionComponent,
  MutableRefObject,
  ReactElement,
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
  NavigationScreen,
  NavigationScreenProps,
} from './navigation-screen.component';
import {
  NavigationToggler,
  NavigationTogglerProps,
} from './navigation-toggler.component';

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

const isNavigationScreenContent = (children?: ReactElement) => {
  if (children) {
    return (
      (NavigationScreen && NavigationScreen.isPrototypeOf(children.type)) ||
      children.type === NavigationScreen
    );
  }

  return false;
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
  const [isScreenOpen, setIsScreenOpen] = useState(false);

  return (
    <nav
      className={cx(
        'navbar',
        'navbar-expand-lg',
        isNotOpacity ? background : isScreenOpen ? background : null,
        navigationScheme,
        justifyContent,
        fixed,
        {
          'flex-row': isNavigationScreenContent(children as ReactElement),
          'flex-column': !isNavigationScreenContent(children as ReactElement),
          'vh-100':
            !isNavigationScreenContent(children as ReactElement) &&
            isScreenOpen,
        }
      )}
      ref={(opacityRef as unknown) as MutableRefObject<HTMLBaseElement>}
    >
      <div
        className={cx('w-100', {
          'd-flex flex-row justify-content-between': !isNavigationScreenContent(
            children as ReactElement
          ),
        })}
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
        <Guard<NavigationTogglerProps>
          Component={NavigationToggler}
          props={{ onToggle: () => setIsScreenOpen(!isScreenOpen) }}
        >
          {children}
        </Guard>
      </div>
      <Guard<NavigationScreenProps>
        Component={NavigationScreen}
        props={{ isOpen: isScreenOpen }}
      >
        {children}
      </Guard>
    </nav>
  );
};
