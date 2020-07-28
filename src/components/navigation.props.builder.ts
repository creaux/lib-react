import { NAVIGATION_SCHEME, NavigationProps } from './navigation.component';
import { ReactNode } from 'react';
import { BACKGROUND_COLOR } from '../schema/background-color.enum';
import { JUSTIFY_CONTENT } from '../schema/justify-content.enum';
import { FIXED } from '../schema/fixed.enum';

export class NavigationPropsBuilder {
  private children!: ReactNode;
  private background!: BACKGROUND_COLOR;
  private navigationScheme!: NAVIGATION_SCHEME;
  private justifyContent!: JUSTIFY_CONTENT;
  private fixed!: FIXED;
  private opacity!: number;

  public withChildren(children: ReactNode): NavigationPropsBuilder {
    this.children = children;
    return this;
  }

  public withBackground(background: BACKGROUND_COLOR): NavigationPropsBuilder {
    this.background = background;
    return this;
  }

  public withNavigationScheme(navigationScheme: NAVIGATION_SCHEME) {
    this.navigationScheme = navigationScheme;
    return this;
  }

  public withJustifyContent(justifyContent: JUSTIFY_CONTENT) {
    this.justifyContent = justifyContent;
    return this;
  }

  public withFixed(fixed: FIXED): NavigationPropsBuilder {
    this.fixed = fixed;
    return this;
  }

  public withOpacity(opacity: number): NavigationPropsBuilder {
    this.opacity = opacity;
    return this;
  }

  public build(): NavigationProps {
    return {
      children: this.children,
      background: this.background,
      navigationScheme: this.navigationScheme,
      justifyContent: this.justifyContent,
      fixed: this.fixed,
      opacity: this.opacity,
    };
  }
}
