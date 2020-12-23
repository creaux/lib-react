import React, { FunctionComponent } from 'react';

export interface DividerProps {
  children: string;
}

export const Divider: FunctionComponent<DividerProps> = ({ children }) => (
  <div className="position-relative text-center mb-4">
    <hr className="divider" />
    <p className="mb-0 divider-title text-muted pl-2 pr-2">{children}</p>
  </div>
);
