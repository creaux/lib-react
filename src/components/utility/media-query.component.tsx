import React, { FunctionComponent, ReactNode } from 'react';
import Responsive from 'react-responsive';

export enum Mapped {
  SM,
  MD,
  LG,
  XL,
}

export enum Breakpoints {
  XS = 0,
  SM = 576,
  MD = 768,
  LG = 992,
  XL = 1200,
}

export interface MediaQueryProps {
  children: ReactNode;
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
}

export const MediaQuery: FunctionComponent<MediaQueryProps> = ({
  children,
  xs,
  sm,
  md,
  lg,
  xl,
}) => {
  const tuple = [
    Breakpoints.XS,
    Breakpoints.SM,
    Breakpoints.MD,
    Breakpoints.LG,
    Breakpoints.XL,
  ];
  const breakpoints = [xs, sm, md, lg, xl];
  const min = breakpoints.indexOf(true);
  const max = breakpoints.lastIndexOf(true);
  const minBreakpoint = tuple[min];
  const maxBreakpoint = tuple[max];

  if (min === max) {
    return <Responsive minDeviceWidth={minBreakpoint}>{children}</Responsive>;
  }

  return (
    <Responsive minDeviceWidth={minBreakpoint} maxDeviceWidth={maxBreakpoint}>
      {children}
    </Responsive>
  );
};
