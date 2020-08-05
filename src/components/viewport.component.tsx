import React, { ComponentClass, FunctionComponent } from 'react';
import { mapBreakpointCoordinatesToStyle } from './map-breakpoint-coordinates-to-style.hoc';
import { compose, mapProps, setDisplayName } from 'recompose';
import { omit } from 'lodash';
import cx from 'classnames';
import {
  MapPropsToCssVariablesInputProps,
  MapPropsToCssVariablesOutputProps,
} from './map-breakpoint-coordinates-to-style.props';

const { assign } = Object;

interface ViewportComponentProps extends MapPropsToCssVariablesOutputProps {}

const ViewportComponent: FunctionComponent<ViewportComponentProps> = ({
  style,
  children,
}) => {
  return (
    <div className={cx('viewport')} style={style}>
      {children}
    </div>
  );
};

export interface ViewportProps extends MapPropsToCssVariablesInputProps {
  backgroundImage?: string;
}

export const Viewport: ComponentClass<ViewportProps> = compose<
  ViewportComponentProps,
  ViewportProps
>(
  mapBreakpointCoordinatesToStyle,
  setDisplayName('Viewport'),
  mapProps((props: ViewportComponentProps & ViewportProps) => {
    const omittedProps = omit(props, 'background', 'style');

    let style = {};

    if (props.style) {
      assign(style, props.style);
    }

    if (props.backgroundImage) {
      assign(style, { backgroundImage: `url(${props.backgroundImage})` });
    }

    return { ...omittedProps, style };
  })
)(ViewportComponent);
