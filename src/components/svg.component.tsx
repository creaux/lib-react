import React, { FunctionComponent } from 'react';

export interface SvgProps {
  svg: string;
}

export const Svg: FunctionComponent<SvgProps> = ({ svg }) => (
  <>
    <svg />
  </>
);
