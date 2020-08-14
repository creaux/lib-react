import { NavigationProps, NavigationScheme } from './navigation.component';
import { ReactNode } from 'react';
import { BackgroundColor } from '../schema/background-color.enum';
import { JustifyContent } from '../schema/justify-content.enum';
import { Fixed } from '../schema/fixed.enum';

export class NavigationPropsBuilder {
  private children!: ReactNode;
  private background!: BackgroundColor;
  private navigationScheme!: NavigationScheme;
  private justifyContent!: JustifyContent;
  private fixed!: Fixed;
  private opacity!: number;

  public withChildren(children: ReactNode): NavigationPropsBuilder {
    this.children = children;
    return this;
  }

  public withBackground(background: BackgroundColor): NavigationPropsBuilder {
    this.background = background;
    return this;
  }

  public withNavigationScheme(navigationScheme: NavigationScheme) {
    this.navigationScheme = navigationScheme;
    return this;
  }

  public withJustifyContent(justifyContent: JustifyContent) {
    this.justifyContent = justifyContent;
    return this;
  }

  public withFixed(fixed: Fixed): NavigationPropsBuilder {
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
