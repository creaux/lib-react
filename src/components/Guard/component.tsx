import React, { Children, cloneElement, ReactNode } from 'react';
import get from 'lodash/get';

export interface GuardProps<ComponentProps> {
  Component?: ReactNode;
  props?: Partial<ComponentProps>;
  when?: [keyof ComponentProps, keyof ComponentProps[keyof ComponentProps]];
  children?: ReactNode;
  otherwise?: Function;
  defaults?: boolean;
}

/**
 * Guard renders children or otherwise when condition is not met
 */
export class Guard<ComponentProps = string[]> extends React.Component<
  GuardProps<ComponentProps>
> {
  render() {
    const {
      Component,
      children,
      props,
      when,
      otherwise,
      defaults = false,
    } = this.props;

    // When children is not defined then we don't want to render anything
    if (!children && !defaults) {
      return null;
    }

    let hasWhen: any;

    if (!children && defaults) {
      // @ts-ignore
      return <Component {...props} />;
    }

    return Children.map(children, (child) => {
      if (!React.isValidElement(child)) {
        return null;
      }

      if ((when && get(child.props, when)) || typeof when === 'undefined') {
        // hasWhen define whether we want to render otherwise or not
        hasWhen = get(child.props, when as any);
        if (
          (Component && Component.isPrototypeOf(child.type)) ||
          child.type === Component
        ) {
          return cloneElement(child, props);
        }
      }

      if (!hasWhen && otherwise) {
        if (
          !(
            (Component && Component.isPrototypeOf(child.type)) ||
            child.type === Component
          )
        ) {
          return otherwise();
        }
      }

      return null;
    });
  }
}
