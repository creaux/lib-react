import React, { FunctionComponent } from 'react';
import cx from 'classnames';
import { Position } from '../schema/position.enum';
import { useCssRegister } from '../hooks/use-css-register.hook';
import { BreakpointCoordinates } from './breakpoint-coordinates.type';
import { get } from 'lodash';
import { Padding } from '../schema/padding.enum';
import { Color } from '..';
import { textColorMapper } from '../schema/color.enum';

export interface ViewportProps {
  backgroundImage?: string;
  position?: Position;
  breakpointCoordinates?: BreakpointCoordinates;
  center?: boolean;
  padding?: Padding;
  color?: Color;
}

export const Viewport: FunctionComponent<ViewportProps> = ({
  children,
  backgroundImage,
  position,
  breakpointCoordinates,
  center = false,
  padding,
  color,
}) => {
  const ref = useCssRegister(
    [
      '--Viewport__breakpointCoordinates-xs-x',
      '--Viewport__breakpointCoordinates-xs-y',
      '--Viewport__breakpointCoordinates-sm-x',
      '--Viewport__breakpointCoordinates-sm-y',
      '--Viewport__breakpointCoordinates-md-x',
      '--Viewport__breakpointCoordinates-md-y',
      '--Viewport__breakpointCoordinates-lg-x',
      '--Viewport__breakpointCoordinates-lg-y',
      '--Viewport__breakpointCoordinates-xl-x',
      '--Viewport__breakpointCoordinates-xl-y',
    ],
    [
      get(breakpointCoordinates, ['xs', 'x']),
      get(breakpointCoordinates, ['xs', 'y']),
      get(breakpointCoordinates, ['sm', 'x']),
      get(breakpointCoordinates, ['sm', 'y']),
      get(breakpointCoordinates, ['md', 'x']),
      get(breakpointCoordinates, ['md', 'y']),
      get(breakpointCoordinates, ['lg', 'x']),
      get(breakpointCoordinates, ['lg', 'y']),
      get(breakpointCoordinates, ['xl', 'x']),
      get(breakpointCoordinates, ['xl', 'y']),
    ]
  );

  return (
    <div
      className={cx(
        'viewport',
        color ? textColorMapper[color] : undefined,
        padding,
        position,
        {
          'viewport--center': center,
        }
      )}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      ref={ref}
    >
      {children}
    </div>
  );
};
