import { ViewportPositionInterface, ViewportProps } from './viewport.component';

export class ViewportPropsBuilder {
  protected background!: string;
  protected xPosition!: ViewportPositionInterface;

  withBackground(background: string) {
    this.background = background;
    return this;
  }

  withXPosition(xPosition: ViewportPositionInterface) {
    this.xPosition = xPosition;
    return this;
  }

  build(): ViewportProps {
    return {
      background: this.background,
      xPosition: this.xPosition,
    };
  }
}

export class ViewportPositionBuilder {
  protected portrait!: string;
  protected landscape!: string;
  protected desktop!: string;

  withPortrait(portrait: string) {
    this.portrait = portrait;
    return this;
  }

  withLandscape(landscape: string) {
    this.landscape = landscape;
    return this;
  }

  withDesktop(desktop: string) {
    this.desktop = desktop;
    return this;
  }

  build(): ViewportPositionInterface {
    return {
      portrait: this.portrait,
      landscape: this.landscape,
      desktop: this.desktop,
    };
  }
}
