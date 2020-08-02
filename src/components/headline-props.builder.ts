import {
  HeadlinePosition,
  HeadlinePositions,
  HeadlineProps,
} from './headline.component';

export class HeadlinePositionBuilder {
  private x!: number;
  private y!: number;

  withX(x: number): HeadlinePositionBuilder {
    this.x = x;
    return this;
  }

  withY(y: number): HeadlinePositionBuilder {
    this.y = y;
    return this;
  }

  build(): HeadlinePosition {
    return {
      x: this.x,
      y: this.y,
    };
  }
}

export class HeadlinePositionsBuilder {
  private xs!: HeadlinePosition;
  private sm!: HeadlinePosition;
  private md!: HeadlinePosition;
  private lg!: HeadlinePosition;
  private xl!: HeadlinePosition;

  withXs(xs: HeadlinePosition): HeadlinePositionsBuilder {
    this.xs = xs;
    return this;
  }

  withSm(sm: HeadlinePosition): HeadlinePositionsBuilder {
    this.sm = sm;
    return this;
  }

  withMd(md: HeadlinePosition): HeadlinePositionsBuilder {
    this.md = md;
    return this;
  }

  withLg(lg: HeadlinePosition): HeadlinePositionsBuilder {
    this.lg = lg;
    return this;
  }

  withXl(xl: HeadlinePosition): HeadlinePositionsBuilder {
    this.xl = xl;
    return this;
  }

  build(): HeadlinePositions {
    return {
      xs: this.xs,
      sm: this.sm,
      md: this.md,
      lg: this.lg,
      xl: this.xl,
    };
  }
}

export class HeadlinePropsBuilder {
  positions!: HeadlinePositions;
  title!: string;
  paragraph!: string;

  withPositions(positions: HeadlinePositions): HeadlinePropsBuilder {
    this.positions = positions;
    return this;
  }

  withTitle(title: string): HeadlinePropsBuilder {
    this.title = title;
    return this;
  }

  withParagraph(paragraph: string): HeadlinePropsBuilder {
    this.paragraph = paragraph;
    return this;
  }

  build(): HeadlineProps {
    return {
      positions: this.positions,
      title: this.title,
      paragraph: this.paragraph,
    };
  }
}
