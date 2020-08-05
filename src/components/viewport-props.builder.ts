import { ViewportProps } from './viewport.component';
import { MapPropsToCssVariablesInputPropsBuilder } from './map-breakpoint-coordinates-to-style.builder';

export class ViewportPropsBuilder extends MapPropsToCssVariablesInputPropsBuilder {
  protected background!: string;

  public withBackground(background: string): ViewportPropsBuilder {
    this.background = background;
    return this;
  }

  build(): ViewportProps {
    return {
      backgroundImage: this.background,
      breakpointCoordinates: this.breakpointCoordinates,
    };
  }
}
