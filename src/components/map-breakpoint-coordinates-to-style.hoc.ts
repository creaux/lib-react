import { ComponentType, createElement } from 'react';
import { omit } from 'lodash';
import {
  MapPropsToCssVariablesInputProps,
  MapPropsToCssVariablesOutputProps,
} from './map-breakpoint-coordinates-to-style.props';
import { MapPropsToCssVariableOutputPropsBuilder } from './map-breakpoint-coordinates-to-style.builder';

const { assign } = Object;

type Literal = { [key: string]: any };

enum Breakpoint {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
}

enum Coordinate {
  X = 'x',
  Y = 'y',
}

const mapCoordinatesToVariables = (name: string, props: Literal) => (
  variable: string | number | symbol
): Literal => {
  if (
    typeof variable === 'string' &&
    props.hasOwnProperty(variable) &&
    props[variable] !== undefined
  ) {
    // --component__position-xs-x
    return {
      [`--${name}__${variable}-${Breakpoint.XS}-${Coordinate.X}`]: props[
        variable
      ][Breakpoint.XS][Coordinate.X],
      [`--${name}__${variable}-${Breakpoint.XS}-${Coordinate.Y}`]: props[
        variable
      ][Breakpoint.XS][Coordinate.Y],
      [`--${name}__${variable}-${Breakpoint.SM}-${Coordinate.X}`]: props[
        variable
      ][Breakpoint.SM][Coordinate.X],
      [`--${name}__${variable}-${Breakpoint.SM}-${Coordinate.Y}`]: props[
        variable
      ][Breakpoint.SM][Coordinate.Y],
      [`--${name}__${variable}-${Breakpoint.MD}-${Coordinate.X}`]: props[
        variable
      ][Breakpoint.MD][Coordinate.X],
      [`--${name}__${variable}-${Breakpoint.MD}-${Coordinate.Y}`]: props[
        variable
      ][Breakpoint.MD][Coordinate.Y],
      [`--${name}__${variable}-${Breakpoint.LG}-${Coordinate.X}`]: props[
        variable
      ][Breakpoint.LG][Coordinate.X],
      [`--${name}__${variable}-${Breakpoint.LG}-${Coordinate.Y}`]: props[
        variable
      ][Breakpoint.LG][Coordinate.Y],
      [`--${name}__${variable}-${Breakpoint.XL}-${Coordinate.X}`]: props[
        variable
      ][Breakpoint.XL][Coordinate.X],
      [`--${name}__${variable}-${Breakpoint.XL}-${Coordinate.Y}`]: props[
        variable
      ][Breakpoint.XL][Coordinate.Y],
    };
  }
  return {};
};

export const mapBreakpointCoordinatesToStyle = <
  Props extends MapPropsToCssVariablesInputProps,
  PropsOfDecoratedComponent extends MapPropsToCssVariablesOutputProps
>(
  Component: ComponentType<PropsOfDecoratedComponent>
) => (props: Props) => {
  if (!Component.displayName) {
    throw new Error('Display name has to be defined');
  }
  const cssVariables = mapCoordinatesToVariables(
    Component.displayName,
    props
  )('breakpointCoordinates');
  const omittedProps = omit(props, 'breakpointCoordinates');
  const mergedProps = assign(
    {},
    new MapPropsToCssVariableOutputPropsBuilder()
      .withStyle(cssVariables)
      .build(),
    omittedProps
  );
  return createElement(
    Component,
    (mergedProps as unknown) as PropsOfDecoratedComponent
  );
};
