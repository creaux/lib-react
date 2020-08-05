import React, { ComponentClass, FunctionComponent } from 'react';
import { mapPropsToCssStyle, StyleProps } from '../hocs/mapPropsToCssVariables';
import { compose, mapProps, setDisplayName } from 'recompose';
import { omit } from 'lodash';
import cx from 'classnames';

/**
 * xs, sm, md, lg, xl refactoring
 */
export interface ViewportPositionInterface {
  portrait: string;
  landscape: string;
  desktop: string;
}

/**
 * position should have x and y
 */
export interface ViewportProps {
  background?: string;
  xPosition?: ViewportPositionInterface;
  className?: string;
}

export interface ViewportComponentProps extends StyleProps {
  style: { [key: string]: string };
  className?: string;
}

export const ViewportComponent: FunctionComponent<ViewportComponentProps> = ({
  style,
  children,
  className,
}) => {
  return (
    <div className={cx('viewport', className)} style={style}>
      {children}
    </div>
  );
};

export const Viewport: ComponentClass<ViewportProps> = compose<
  ViewportComponentProps,
  ViewportProps
>(
  mapPropsToCssStyle<ViewportProps, ViewportComponentProps>('xPosition'),
  setDisplayName('Viewport'),
  mapProps((props: ViewportComponentProps & ViewportProps) => {
    const omittedProps = omit(props, 'background', 'style');

    let style = {};

    if (props.style) {
      Object.assign(style, props.style);
    }

    if (props.background) {
      Object.assign(style, { backgroundImage: `url(${props.background})` });
    }

    return { ...omittedProps, style };
  })
)(ViewportComponent);
