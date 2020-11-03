import React, { FunctionComponent } from 'react';
import { Button, ButtonProps } from '../forms/Button/index';

export interface NavigationButtonsProps {
  buttons: ButtonProps[];
}

export const NavigationButtons: FunctionComponent<NavigationButtonsProps> = ({
  buttons,
}) => (
  <form className="form-inline ml-auto mr-2">
    {buttons.map((button, i) => (
      <Button {...button} key={i} />
    ))}
  </form>
);
