import React, { FunctionComponent, ReactChild } from "react";
import { Variants, Type } from "./types";
import { Button as Btn } from "react-bootstrap";
import { Sizes } from "../../types/sizes";
import cx from "classnames";

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
  children = "Confirm",
  variant = Variants.PRIMARY,
  size,
  onClick,
  className,
  type,
  disabled,
  extended = false
}) => (
  <Btn
    variant={variant}
    size={size}
    onClick={onClick}
    className={cx(className, { "btn-block": extended })}
    type={type}
    disabled={disabled}
  >
    {children}
  </Btn>
);
