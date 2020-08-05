import { HeadlineProps } from './headline.component';
import { MapPropsToCssVariablesInputPropsBuilder } from './map-breakpoint-coordinates-to-style.builder';

export class HeadlinePropsBuilder extends MapPropsToCssVariablesInputPropsBuilder {
  title!: string;
  paragraph!: string;

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
      breakpointCoordinates: this.breakpointCoordinates,
      title: this.title,
      paragraph: this.paragraph,
    };
  }
}
