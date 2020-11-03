import React, { FunctionComponent, ReactNode } from 'react';
import { BreakpointCoordinates } from './breakpoint-coordinates.type';
import { useCssRegister } from '../hooks/use-css-register.hook';
import { get } from 'lodash';
import { Guard } from './guard.component';
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
      get(breakpointWidth, ['xs']),
      get(breakpointWidth, ['sm']),
      get(breakpointWidth, ['md']),
      get(breakpointWidth, ['lg']),
      get(breakpointWidth, ['xl']),
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
