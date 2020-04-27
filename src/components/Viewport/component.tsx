import React, { FunctionComponent } from 'react';
import { BuilderInterface } from '@pyxismedia/lib-model';
import { mapPropsToCssStyle, StyleProps } from '../../hocs/mapPropsToCssVariables';
import { compose, setDisplayName, mapProps } from 'recompose';
import { omit } from 'lodash';

export interface PositionInterface {
  portrait: string;
  landscape: string;
  desktop: string;
}

export class PositionBuilder implements BuilderInterface {
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

  build(): PositionInterface {
    return {
      portrait: this.portrait,
      landscape: this.landscape,
      desktop: this.desktop
    }
  }
}

export class ViewportPropsBuilder implements BuilderInterface {
  protected background!: string;
  protected xPosition!: PositionInterface;

  withBackground(background: string) {
    this.background = background;
    return this;
  }

  withXPosition(xPosition: PositionInterface) {
    this.xPosition = xPosition;
    return this;
  }

  build(): ViewportProps {
    return {
      background: this.background,
      xPosition: this.xPosition
    }
  }
}

export interface ViewportProps {
  background: string;
  xPosition: PositionInterface;
}

export interface ViewportComponentProps extends StyleProps {
  style: { [key: string]: string };
}

export const ViewportComponent: FunctionComponent<ViewportComponentProps> = ({ style, children }) => {
  return (
    <div className="viewport" style={style}>
      {children}
    </div>
  );
};

export const Viewport = compose<ViewportComponentProps, ViewportProps>(
  mapPropsToCssStyle<ViewportProps, ViewportComponentProps>('xPosition'),
  setDisplayName('Viewport'),
  mapProps((props: ViewportComponentProps & ViewportProps) => {
    const omitedProps = omit(props, 'background', 'style');
    const style = { ...props.style || {}, backgroundImage: `url(${props.background})` };
    return { ...omitedProps, style };
  }),
)(ViewportComponent);
