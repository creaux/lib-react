import React, { FunctionComponent } from 'react';
import cx from 'classnames';

export interface NameProps {
  className?: string;
}

export const Name: FunctionComponent<NameProps> = ({ children, className }) => (
  <p className={cx('h5 text-muted mb-0 font-weight-light', className)}>
    {children}
  </p>
);
