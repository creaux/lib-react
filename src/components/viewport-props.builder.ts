import { ViewportProps } from './viewport.component';
import { BreakpointCoordinates } from './breakpoint-coordinates.type';
import { Position } from '../schema/position.enum';

export class ViewportPropsBuilder {
  protected background!: string;
  private breakpointCoordinates!: BreakpointCoordinates;
  private position!: Position;

  public withBackground(background: string): ViewportPropsBuilder {
    this.background = background;
    return this;
  }

  public withBreakpointCoordinates(
    breakpointCoordinates: BreakpointCoordinates
  ) {
    this.breakpointCoordinates = breakpointCoordinates;
    return this;
  }

  public withPosition(position: Position) {
    this.position = position;
    return this;
  }

  build(): ViewportProps {
    return {
      backgroundImage: this.background,
      breakpointCoordinates: this.breakpointCoordinates,
      position: this.position,
    };
  }
}
