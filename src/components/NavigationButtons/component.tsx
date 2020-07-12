import React, { FunctionComponent } from 'react';
import { Button, ButtonProps } from '../forms/Button';

export interface NavigationButtonsProps {
  buttons: ButtonProps[];
}

export const NavigationButtons: FunctionComponent<NavigationButtonsProps> = ({
  buttons
}) => (
  <form className="form-inline">
    {buttons.map(button => (
      <Button {...button} />
    ))}
  </form>
);
