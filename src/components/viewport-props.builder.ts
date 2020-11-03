import { ViewportProps } from './viewport.component';
import { BreakpointCoordinates } from './breakpoint-coordinates.type';
import { Position } from '../schema/position.enum';

export class ViewportPropsBuilder {
  protected background!: string;
  private breakpointCoordinates!: BreakpointCoordinates;
  private position!: Position;
  private center!: boolean;

  public withBackground(background: string): ViewportPropsBuilder {
    this.background = background;
    return this;
  }

  public withBreakpointCoordinates(
    breakpointCoordinates: BreakpointCoordinates
  ): ViewportPropsBuilder {
    this.breakpointCoordinates = breakpointCoordinates;
    return this;
  }

  public withPosition(position: Position): ViewportPropsBuilder {
    this.position = position;
    return this;
  }

  public withCenter(): ViewportPropsBuilder {
    this.center = true;
    return this;
  }

  build(): ViewportProps {
    return {
      backgroundImage: this.background,
      breakpointCoordinates: this.breakpointCoordinates,
      position: this.position,
      center: this.center,
    };
  }
}
