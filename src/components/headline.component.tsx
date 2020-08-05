import React, { FunctionComponent } from 'react';
import { mapBreakpointCoordinatesToStyle } from './map-breakpoint-coordinates-to-style.hoc';
import { compose, setDisplayName } from 'recompose';
import {
  MapPropsToCssVariablesInputProps,
  MapPropsToCssVariablesOutputProps,
} from './map-breakpoint-coordinates-to-style.props';

interface HeadlineComponentProps extends MapPropsToCssVariablesOutputProps {
  title: string;
  paragraph: string;
}

const HeadlineComponent: FunctionComponent<HeadlineComponentProps> = ({
  style,
  title,
  paragraph,
}) => {
  return (
    <div className="headline" style={style}>
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </div>
  );
};

export interface HeadlineProps extends MapPropsToCssVariablesInputProps {
  title: string;
  paragraph: string;
}

export const Headline = compose<HeadlineComponentProps, HeadlineProps>(
  mapBreakpointCoordinatesToStyle,
  setDisplayName('Headline')
)(HeadlineComponent);
