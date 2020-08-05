import { CSSProperties } from 'react';

export interface Coordinates {
  x: number | string;
  y: number | string;
}

export interface BreakpointCoordinates {
  xs: Coordinates;
  sm: Coordinates;
  md: Coordinates;
  lg: Coordinates;
  xl: Coordinates;
}

/**
 * Extensible interface for Higher-Order Component Props
 */
export interface MapPropsToCssVariablesInputProps {
  breakpointCoordinates?: BreakpointCoordinates;
}

/**
 * Extensible interface for Component Props as result of style property
 */
export interface MapPropsToCssVariablesOutputProps {
  style: CSSProperties;
}
