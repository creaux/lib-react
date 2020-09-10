import React, { FunctionComponent } from 'react';
import { Button, ButtonProps } from '../forms/Button/index';

export interface NavigationButtonsProps {
  children: ButtonProps[];
}

export const NavigationButtons: FunctionComponent<NavigationButtonsProps> = ({
  children,
}) => (
  <form className="form-inline">
    {children.map((button, i) => (
      <Button {...button} key={i} />
    ))}
  </form>
);
