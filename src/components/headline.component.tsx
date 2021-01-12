import React, { FunctionComponent, ReactNode } from 'react';
import { BreakpointCoordinates } from './breakpoint-coordinates.type';
import { useCssRegister } from '../hooks/use-css-register.hook';
import { get } from 'lodash';
import { Guard } from './utility/guard.component';
import { Gloom } from './gloom.component';
import { BreakpointValue } from './breakpoint-value.type';
import cx from 'classnames';
import { Padding } from '../schema/padding.enum';

export interface HeadlineProps {
  title: string;
  paragraph: string;
  breakpointCoordinates?: BreakpointCoordinates;
  children?: ReactNode;
  breakpointWidth?: BreakpointValue;
  center?: boolean;
  absolute?: boolean;
  padding?: Padding;
}

export const Headline: FunctionComponent<HeadlineProps> = ({
  title,
  paragraph,
  breakpointCoordinates,
  breakpointWidth,
  children,
  center = false,
  absolute = true,
  padding = Padding.P5,
}) => {
  const ref = useCssRegister(
    [
      '--Headline__breakpointCoordinates-xs-x',
      '--Headline__breakpointCoordinates-xs-y',
      '--Headline__breakpointCoordinates-sm-x',
      '--Headline__breakpointCoordinates-sm-y',
      '--Headline__breakpointCoordinates-md-x',
      '--Headline__breakpointCoordinates-md-y',
      '--Headline__breakpointCoordinates-lg-x',
      '--Headline__breakpointCoordinates-lg-y',
      '--Headline__breakpointCoordinates-xl-x',
      '--Headline__breakpointCoordinates-xl-y',
      '--bw-xs',
      '--bw-sm',
      '--bw-md',
      '--bw-lg',
      '--bw-xl',
    ],
    [
      get(breakpointCoordinates, ['xs', 'x'], 'center'),
      get(breakpointCoordinates, ['xs', 'y'], 'center'),
      get(breakpointCoordinates, ['sm', 'x'], 'center'),
      get(breakpointCoordinates, ['sm', 'y'], 'center'),
      get(breakpointCoordinates, ['md', 'x'], 'center'),
      get(breakpointCoordinates, ['md', 'y'], 'center'),
      get(breakpointCoordinates, ['lg', 'x'], 'center'),
      get(breakpointCoordinates, ['lg', 'y'], 'center'),
      get(breakpointCoordinates, ['xl', 'x'], 'center'),
      get(breakpointCoordinates, ['xl', 'y'], 'center'),
      get(breakpointWidth, ['xs'], 'center'),
      get(breakpointWidth, ['sm'], 'center'),
      get(breakpointWidth, ['md'], 'center'),
      get(breakpointWidth, ['lg'], 'center'),
      get(breakpointWidth, ['xl'], 'center'),
    ]
  );

  return (
    <div
      className={cx('headline', padding, {
        'headline--center': center,
        'headline--absolute': absolute,
      })}
      ref={ref}
    >
      <Guard Component={Gloom}>{children}</Guard>
      <h1 className="position-relative">{title}</h1>
      <p className="position-relative">{paragraph}</p>
    </div>
  );
};
