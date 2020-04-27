import React, { FunctionComponent } from 'react';

export interface LabelProps {
  children: string;
}

export const Label: FunctionComponent<LabelProps> = ({ children }) => (
  <p className="text-uppercase">{children}</p>
);
