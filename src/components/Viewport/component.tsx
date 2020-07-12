import React, { FunctionComponent } from 'react';
import {
  mapPropsToCssStyle,
  StyleProps
} from '../../hocs/mapPropsToCssVariables';
import { compose, setDisplayName, mapProps } from 'recompose';
import { omit } from 'lodash';
import cx from 'classnames';

export interface PositionInterface {
  portrait: string;
  landscape: string;
  desktop: string;
}

export class PositionBuilder {
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
    };
  }
}

export class ViewportPropsBuilder {
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
    };
  }
}

export interface ViewportProps {
  background?: string;
  xPosition?: PositionInterface;
  className?: string;
}

export interface ViewportComponentProps extends StyleProps {
  style: { [key: string]: string };
  className?: string;
}

export const ViewportComponent: FunctionComponent<ViewportComponentProps> = ({
  style,
  children,
  className
}) => {
  return (
    <div className={cx('viewport', className)} style={style}>
      {children}
    </div>
  );
};

export const Viewport = compose<ViewportComponentProps, ViewportProps>(
  mapPropsToCssStyle<ViewportProps, ViewportComponentProps>('xPosition'),
  setDisplayName('Viewport'),
  mapProps((props: ViewportComponentProps & ViewportProps) => {
    const omitedProps = omit(props, 'background', 'style');

    let style = {};

    if (props.style) {
      Object.assign(style, props.style);
    }

    if (props.background) {
      Object.assign(style, { backgroundImage: `url(${props.background})` });
    }

    return { ...omitedProps, style };
  })
)(ViewportComponent);
