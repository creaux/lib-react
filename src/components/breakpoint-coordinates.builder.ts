import { Coordinates } from './breakpoint-coordinates.type';

export class CoordinatesBuilder {
  x!: string;
  y!: string;

  withX(x: string): CoordinatesBuilder {
    this.x = x;
    return this;
  }

  withY(y: string): CoordinatesBuilder {
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
