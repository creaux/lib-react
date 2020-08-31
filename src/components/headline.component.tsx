import React, { FunctionComponent } from 'react';
import { BreakpointCoordinates } from './breakpoint-coordinates.type';
import { useCssRegister } from '../hooks/use-css-register';
import { get } from 'lodash';

export interface HeadlineProps {
  title: string;
  paragraph: string;
  breakpointCoordinates?: BreakpointCoordinates;
}

export const Headline: FunctionComponent<HeadlineProps> = ({
  title,
  paragraph,
  breakpointCoordinates,
}) => {
  useCssRegister(
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
    <div className="headline">
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </div>
  );
};
