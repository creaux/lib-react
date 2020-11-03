export class BreakpointValueBuilder {
  private xs!: string;
  private sm!: string;
  private md!: string;
  private lg!: string;
  private xl!: string;

  withXs(xs: string): BreakpointValueBuilder {
    this.xs = xs;
    return this;
  }

  withSm(sm: string): BreakpointValueBuilder {
    this.sm = sm;
    return this;
  }

  withMd(md: string): BreakpointValueBuilder {
    this.md = md;
    return this;
  }

  withLg(lg: string): BreakpointValueBuilder {
    this.lg = lg;
    return this;
  }

  withXl(xl: string): BreakpointValueBuilder {
    this.xl = xl;
    return this;
  }

  build(): BreakpointValue {
    return {
      xs: this.xs,
      sm: this.sm,
      md: this.md,
      lg: this.lg,
      xl: this.xl,
    };
  }
}

export interface BreakpointValue {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}
