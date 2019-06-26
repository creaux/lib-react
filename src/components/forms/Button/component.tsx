import React, { FunctionComponent, ReactChild } from 'react';
import { Variants, Type } from './types';
import { Button as Btn } from 'react-bootstrap';
import { Sizes } from '../../types/sizes';

export interface ButtonProps {
  children: ReactChild;
  variant?: Variants;
  size?: Sizes;
  onClick?: (event: any) => void;
  className?: string;
  type?: Type;
}

export const Button: FunctionComponent<ButtonProps> = ({
  children = 'Confirm',
  variant = Variants.PRIMARY,
  size,
  onClick,
  className,
  type
}) => (
  <Btn
    variant={variant}
    size={size}
    onClick={onClick}
    className={className}
    type={type}
  >
    {children}
  </Btn>
);
