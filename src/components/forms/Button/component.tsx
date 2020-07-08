import React, { FunctionComponent, ReactChild } from 'react';
import { Type, Variants } from './types';
import { Button as Btn } from 'react-bootstrap';
import { Sizes } from '../../types/sizes';
import cx from 'classnames';

export class ButtonPropsBuilder {
  private children!: ReactChild;
  private variant!: Variants;
  private size!: Sizes;
  private onClick!: (event: any) => void;
  private className!: string;
  private type!: Type;
  private disabled!: boolean;
  private extended!: boolean;

  public withChildren(children: ReactChild): ButtonPropsBuilder {
    this.children = children;
    return this;
  }

  public withVariant(variant: Variants): ButtonPropsBuilder {
    this.variant = variant;
    return this;
  }

  public withSize(size: Sizes): ButtonPropsBuilder {
    this.size = size;
    return this;
  }

  public withOnClick(onClick: (event: any) => void): ButtonPropsBuilder {
    this.onClick = onClick;
    return this;
  }

  public withClassName(className: string): ButtonPropsBuilder {
    this.className = className;
    return this;
  }

  public withType(type: Type): ButtonPropsBuilder {
    this.type = type;
    return this;
  }

  public withDisabled(disabled: boolean): ButtonPropsBuilder {
    this.disabled = disabled;
    return this;
  }

  public withExtended(extended: boolean): ButtonPropsBuilder {
    this.extended = extended;
    return this;
  }

  public build(): ButtonProps {
    return {
      children: this.children,
      variant: this.variant,
      size: this.size,
      onClick: this.onClick,
      className: this.className,
      type: this.type,
      disabled: this.disabled,
      extended: this.extended,
    };
  }
}

export interface ButtonProps {
  children: ReactChild;
  variant?: Variants;
  size?: Sizes;
  onClick?: (event: any) => void;
  className?: string;
  type?: Type;
  disabled?: boolean;
  extended?: boolean;
}

export const Button: FunctionComponent<ButtonProps> = ({
                                                         children = 'Confirm',
                                                         variant = Variants.PRIMARY,
                                                         size,
                                                         onClick,
                                                         className,
                                                         type,
                                                         disabled,
                                                         extended = false,
                                                       }) => (
  <Btn
    variant={variant}
    size={size}
    onClick={onClick}
    className={cx(className, {'btn-block': extended})}
    type={type}
    disabled={disabled}
  >
    {children}
  </Btn>
);
