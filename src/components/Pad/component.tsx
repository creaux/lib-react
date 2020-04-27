import React, { FunctionComponent, ReactNode } from 'react';

export interface PadProps {
  children: ReactNode[];
}

export const Pad: FunctionComponent<PadProps> = ({ children }) => {
  return children;
};
