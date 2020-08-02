import React, { FunctionComponent } from 'react';

export interface HeadlinePosition {
  x: number;
  y: number;
}

export interface HeadlinePositions {
  xs: HeadlinePosition;
  sm: HeadlinePosition;
  md: HeadlinePosition;
  lg: HeadlinePosition;
  xl: HeadlinePosition;
}

export interface HeadlineProps {
  title: string;
  paragraph: string;
  positions: HeadlinePositions;
}

export const Headline: FunctionComponent<HeadlineProps> = ({
  positions,
  title,
  paragraph,
}) => {
  const style = {
    '--headline__xs-x-position': positions.xs.x,
    '--headline__xs-y-position': positions.xs.y,
    '--headline__sm-x-position': positions.sm.x,
    '--headline__sm-y-position': positions.sm.y,
    '--headline__md-x-position': positions.md.x,
    '--headline__md-y-position': positions.md.y,
    '--headline__lg-x-position': positions.lg.x,
    '--headline__lg-y-position': positions.lg.y,
    '--headline__xl-x-position': positions.xl.x,
    '--headline__xl-y-position': positions.xl.y,
  };

  return (
    // @ts-ignore
    <div className="headline" style={style}>
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </div>
  );
};
