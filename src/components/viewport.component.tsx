import React, { ComponentClass, FunctionComponent } from 'react';
import { mapBreakpointCoordinatesToStyle } from './map-breakpoint-coordinates-to-style.hoc';
import { compose, mapProps, setDisplayName } from 'recompose';
import { omit } from 'lodash';
import cx from 'classnames';
import {
  MapPropsToCssVariablesInputProps,
  MapPropsToCssVariablesOutputProps,
} from './map-breakpoint-coordinates-to-style.props';
import { Position } from '../schema/position.enum';

const { assign } = Object;

interface ViewportComponentProps extends MapPropsToCssVariablesOutputProps {
  className: string;
}

const ViewportComponent: FunctionComponent<ViewportComponentProps> = ({
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

export interface ViewportProps extends MapPropsToCssVariablesInputProps {
  backgroundImage?: string;
  position?: Position;
}

export const Viewport: ComponentClass<ViewportProps> = compose<
  ViewportComponentProps,
  ViewportProps
>(
  mapBreakpointCoordinatesToStyle,
  setDisplayName('Viewport'),
  mapProps((props: ViewportComponentProps & ViewportProps) => {
    const omittedProps = omit(props, 'background', 'style', 'position');

    let style = {};

    if (props.style) {
      assign(style, props.style);
    }

    if (props.backgroundImage) {
      assign(style, {
        backgroundImage: `url(${props.backgroundImage})`,
      });
    }

    const className = cx({ [props.position as Position]: !!props.position });

    return { ...omittedProps, style, className };
  })
)(ViewportComponent);
