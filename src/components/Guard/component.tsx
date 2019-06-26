import React, { Children, cloneElement, ReactNode } from 'react';
import get from 'lodash/get';

export interface GuardProps {
  Component?: ReactNode;
  props?: { [key: string]: any };
  when?: string[];
  children: ReactNode;
  otherwise?: Function;
}

export class Guard extends React.Component<GuardProps> {
  render() {
    const { Component, children, props, when, otherwise } = this.props;

    let hasWhen: any;

    return Children.map(children, child => {
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
