import React, { FunctionComponent, ReactNode } from 'react';
import { ImageVariants } from './types';
import cx from 'classnames';

export class ImagePropsBuilder {
  private src!: string;
  private alt!: string;
  private variant!: ImageVariants;
  private className!: string;
  private children!: ReactNode;
  private rounded!: boolean;

  public withSrc(src: string): ImagePropsBuilder {
    this.src = src;
    return this;
  }

  public withAlt(alt: string): ImagePropsBuilder {
    this.alt = alt;
    return this;
  }

  public withVariant(variant: ImageVariants): ImagePropsBuilder {
    this.variant = variant;
    return this;
  }

  public withClassName(className: string): ImagePropsBuilder {
    this.className = className;
    return this;
  }

  public withChildren(children: ReactNode): ImagePropsBuilder {
    this.children = children;
    return this;
  }

  public withRounded(rounded: boolean): ImagePropsBuilder {
    this.rounded = rounded;
    return this;
  }

  public build(): ImageProps {
    return {
      src: this.src,
      alt: this.alt,
      variant: this.variant,
      className: this.className,
      children: this.children,
      rounded: this.rounded,
    };
  }
}

export interface ImageElement {
  src: string;
  alt?: string;
  rounded: boolean;
}

export interface ImageProps extends ImageElement {
  variant?: ImageVariants;
  className?: string;
  children?: ReactNode;
}

export const Image: FunctionComponent<ImageProps> = ({
                                                       variant = ImageVariants.SOLID,
                                                       src,
                                                       alt,
                                                       className,
                                                       children,
                                                       rounded = true,
                                                     }) => {
  const attrs =
    variant === ImageVariants.BACKGROUND
      ? {style: {backgroundImage: `url(${src})`}}
      : null;
  const isImg = variant === ImageVariants.SOLID;
  return (
    <div
      {...attrs}
      className={cx('image-background', className, {rounded: rounded})}
    >
      {isImg ? <img src={src} alt={alt}/> : null}
      {children}
    </div>
  );
};
