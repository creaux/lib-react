import React, {
  Children,
  FunctionComponent,
  MutableRefObject,
  ReactElement,
  ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { Guard } from './guard.component';
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
import { BackgroundColor } from '../schema/background-color.enum';
import { JustifyContent } from '../schema/justify-content.enum';
import { Fixed } from '../schema/fixed.enum';
import {
  NavigationScreen,
  NavigationScreenProps,
} from './navigation-screen.component';
import {
  NavigationToggler,
  NavigationTogglerProps,
} from './navigation-toggler.component';
import CSSTransition from 'react-transition-group/CSSTransition';

export enum NavigationScheme {
  LIGHT,
  DARK,
}

const navigationSchemeClassNameTuple = ['navbar-light', 'navbar-dark'];
const navigationSchemeClassNameBgTuple = ['bg-light', 'bg-dark'];

const navigationSchemeColorTuple = ['#000', '#FFF'];
const isZeroOpacity = (opacity?: number) =>
  typeof opacity === 'number' && opacity === 0;

const navigationSchemeOpacityBased = (isScreenOpen: boolean) =>
  !isScreenOpen ? NavigationScheme.DARK : NavigationScheme.LIGHT;

export interface NavigationProps {
  children?: ReactNode;
  background?: BackgroundColor;
  navigationScheme?: NavigationScheme;
  justifyContent?: JustifyContent;
  fixed?: Fixed;
  opacity?: number;
}

const useOpacity = (opacity?: number) => {
  const ref = useRef() as MutableRefObject<HTMLBaseElement>;
  const [state, setState] = useState(true);

  if (typeof opacity === 'number') {
    document.documentElement.style.setProperty(
      '--navbar-opacity',
      opacity.toString()
    );
  }

  useLayoutEffect(() => {
    if (ref && ref.current && typeof opacity === 'number') {
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
  navigationScheme = NavigationScheme.LIGHT,
  justifyContent,
  fixed,
  opacity,
}) => {
  // Moving background to replacing div as background doesn't support opacity without modifying color
  const [isNotOpacity, opacityRef] = useOpacity(opacity);
  const [isScreenOpen, setIsScreenOpen] = useState(false);

  // TODO: navigation 890 has to be provided from one place
  return (
    <CSSTransition in={isScreenOpen} timeout={890} classNames="navbar">
      <nav
        className={cx(
          'navbar',
          'navbar-expand-lg',
          isNotOpacity
            ? navigationSchemeClassNameBgTuple[navigationScheme]
            : isZeroOpacity(opacity)
            ? isScreenOpen
              ? navigationSchemeClassNameBgTuple[navigationScheme]
              : null
            : null,
          isNotOpacity
            ? navigationSchemeClassNameTuple[navigationScheme]
            : isZeroOpacity(opacity)
            ? navigationSchemeClassNameTuple[
                navigationSchemeOpacityBased(isScreenOpen)
              ]
            : navigationSchemeClassNameTuple[navigationScheme],
          fixed,
          {
            'flex-row': isNavigationScreenContent(children as ReactElement),
            'flex-column': !isNavigationScreenContent(children as ReactElement),
            'vh-100':
              !isNavigationScreenContent(children as ReactElement) &&
              isScreenOpen,
            'navbar-shadow': !isZeroOpacity(opacity) ? false : true,
            'navbar-background': !isZeroOpacity(opacity),
            'navbar-with-screen': Children.toArray(children).some(
              (child: ReactNode) =>
                child && (child as any).type === NavigationScreen
            ),
          }
        )}
        ref={(opacityRef as unknown) as MutableRefObject<HTMLBaseElement>}
      >
        <div
          className={cx('w-100', 'navbar-content', justifyContent, {
            'd-flex flex-row': !isNavigationScreenContent(
              children as ReactElement
            ),
          })}
        >
          <Guard
            Component={NavigationBrand}
            props={{
              color: !isNotOpacity
                ? isZeroOpacity(opacity)
                  ? navigationSchemeColorTuple[
                      navigationSchemeOpacityBased(isScreenOpen)
                    ]
                  : navigationSchemeColorTuple[navigationScheme]
                : navigationSchemeColorTuple[navigationScheme],
            }}
          >
            {children}
          </Guard>
          <Guard Component={NavigationClaim}>{children}</Guard>
          <Guard<NavigationItemsProps>
            Component={NavigationItems}
            // @ts-ignore
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
            props={{
              onToggle: () => setIsScreenOpen(!isScreenOpen),
              isExpanded: isScreenOpen,
            }}
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
    </CSSTransition>
  );
};
