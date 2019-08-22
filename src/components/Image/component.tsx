import React, { FunctionComponent, ReactNode } from "react";
import { ImageVariants } from './types';
import cx from 'classnames';

export interface ImageElement {
  src: string;
  alt?: string;
}

export interface ImageProps extends ImageElement{
  variant?: ImageVariants;
  className?: string;
  children?: ReactNode;
}

export const Image: FunctionComponent<ImageProps> = ({
  variant = ImageVariants.SOLID,
  src,
  alt,
  className,
  children
}) => {
  const attrs =
    variant === ImageVariants.BACKGROUND
      ? { style: { backgroundImage: `url(${src})` } }
      : null;
  const isImg = variant === ImageVariants.SOLID;
  return (
    <div {...attrs} className={cx("image-background", className)}>
      {isImg ? <img src={src} alt={alt} /> : null}
      {children}
    </div>
  );
};
