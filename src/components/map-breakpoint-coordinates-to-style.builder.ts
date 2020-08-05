import { CSSProperties } from 'react';
import {
  BreakpointCoordinates,
  Coordinates,
  MapPropsToCssVariablesInputProps,
} from './map-breakpoint-coordinates-to-style.props';

export class CoordinatesBuilder {
  x!: number | string;
  y!: number | string;

  withX(x: number | string): CoordinatesBuilder {
    this.x = x;
    return this;
  }

  withY(y: number | string): CoordinatesBuilder {
    this.y = y;
    return this;
  }

  build(): Coordinates {
    return {
      x: this.x,
      y: this.y,
    };
  }
}

export class BreakpointCoordinatesBuilder {
  xs!: Coordinates;
  sm!: Coordinates;
  md!: Coordinates;
  lg!: Coordinates;
  xl!: Coordinates;

  withXs(xs: Coordinates): BreakpointCoordinatesBuilder {
    this.xs = xs;
    return this;
  }

  withSm(sm: Coordinates): BreakpointCoordinatesBuilder {
    this.sm = sm;
    return this;
  }

  withMd(md: Coordinates): BreakpointCoordinatesBuilder {
    this.md = md;
    return this;
  }

  withLg(lg: Coordinates): BreakpointCoordinatesBuilder {
    this.lg = lg;
    return this;
  }

  withXl(xl: Coordinates): BreakpointCoordinatesBuilder {
    this.xl = xl;
    return this;
  }

  build() {
    return {
      xs: this.xs,
      sm: this.sm,
      md: this.md,
      lg: this.lg,
      xl: this.xl,
    };
  }
}

export class MapPropsToCssVariablesInputPropsBuilder {
  protected breakpointCoordinates!: BreakpointCoordinates;

  public withBreakpointCoordinates(
    breakpointCoordinates: BreakpointCoordinates
  ) {
    this.breakpointCoordinates = breakpointCoordinates;
    return this;
  }

  public build(): MapPropsToCssVariablesInputProps {
    return {
      breakpointCoordinates: this.breakpointCoordinates,
    };
  }
}

export class MapPropsToCssVariableOutputPropsBuilder {
  private style!: CSSProperties;

  withStyle(style: CSSProperties): MapPropsToCssVariableOutputPropsBuilder {
    this.style = style;
    return this;
  }

  build() {
    return {
      style: this.style,
    };
  }
}
