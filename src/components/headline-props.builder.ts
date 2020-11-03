import { HeadlineProps } from './headline.component';
import { BreakpointCoordinates } from './breakpoint-coordinates.type';
import { BreakpointValue } from './breakpoint-value.type';

export class HeadlinePropsBuilder {
  title!: string;
  paragraph!: string;
  breakpointCoordinates!: BreakpointCoordinates;
  breakpointWidth!: BreakpointValue;
  center!: boolean;

  withTitle(title: string): HeadlinePropsBuilder {
    this.title = title;
    return this;
  }

  public withBreakpointCoordinates(
    breakpointCoordinates: BreakpointCoordinates
  ) {
    this.breakpointCoordinates = breakpointCoordinates;
    return this;
  }

  withParagraph(paragraph: string): HeadlinePropsBuilder {
    this.paragraph = paragraph;
    return this;
  }

  withBreakpointWidth(breakpointWidth: BreakpointValue): HeadlinePropsBuilder {
    this.breakpointWidth = breakpointWidth;
    return this;
  }

  withCenter(): HeadlinePropsBuilder {
    this.center = true;
    return this;
  }

  build(): HeadlineProps {
    return {
      breakpointCoordinates: this.breakpointCoordinates,
      title: this.title,
      paragraph: this.paragraph,
      breakpointWidth: this.breakpointWidth,
      center: this.center,
    };
  }
}
