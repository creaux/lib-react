import { HeadlineProps } from './headline.component';
import { BreakpointCoordinates } from './breakpoint-coordinates.type';

export class HeadlinePropsBuilder {
  title!: string;
  paragraph!: string;
  breakpointCoordinates!: BreakpointCoordinates;

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

  build(): HeadlineProps {
    return {
      breakpointCoordinates: this.breakpointCoordinates,
      title: this.title,
      paragraph: this.paragraph,
    };
  }
}
