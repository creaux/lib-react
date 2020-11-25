import React, { FunctionComponent, ReactNode } from 'react';

export interface AspectProps {
  children: ReactNode;
  title: string;
  description: string;
}

export const Aspect: FunctionComponent<AspectProps> = ({
  children,
  title,
  description,
}) => (
  <div className="card text-md-center flex-row flex-md-column border-0">
    <div className="card__image flex-md-shrink-0 w-md-100 d-flex align-items-center d-md-block">
      {children}
    </div>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
    </div>
  </div>
);
