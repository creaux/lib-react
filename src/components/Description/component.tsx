import React, { FunctionComponent } from 'react';

export interface DescriptionProps {
  children: string;
}

export const Description: FunctionComponent<DescriptionProps> = ({
  children,
}) => <p className="font-weight-light mb-4 mb-sm-3">{children}</p>;
