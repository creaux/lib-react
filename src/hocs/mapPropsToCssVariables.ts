import { createElement } from 'react';
import { ComponentType } from 'react';
import { omit } from 'lodash';

const { assign } = Object;

type Literal = { [key: string]: any };

export interface StyleProps {
  style: { [key: string]: string };
}

export interface ResponsiveCss {
  portrait: string;
  landscape: string;
  desktop?: string;
}

const mapPropToCssVariables = (name: string, props: Literal) => (
  variable: string | number | symbol
): Literal => {
  if (typeof variable === 'string' && props.hasOwnProperty(variable)) {
    return {
      [`--${name}__${variable}-portrait`]: props[variable]['portrait'],
      [`--${name}__${variable}-landscape`]: props[variable]['landscape'],
      [`--${name}__${variable}-desktop`]: props[variable]['desktop'],
    };
  }
  return {};
};

const mapArrayToObject = (accumulator: Literal, current: Literal) => {
  return assign(accumulator, current);
};

export const mapPropsToCssStyle = <
  InputProps extends {},
  OutputProps extends {}
>(
  ...variables: (keyof InputProps)[]
) => (Component: ComponentType<OutputProps>) => (props: InputProps) => {
  if (!Component.displayName) {
    throw new Error('Display name has to be defined');
  }

  const cssVariables = variables
    .map(mapPropToCssVariables(Component.displayName, props))
    .reduce(mapArrayToObject, {});
  const omittedProps = omit(props, variables);
  const mergedProps = assign({}, { style: cssVariables }, omittedProps);
  return createElement(Component, (mergedProps as unknown) as OutputProps);
};
