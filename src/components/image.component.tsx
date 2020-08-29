import React, { FunctionComponent, ReactNode } from 'react';
import { ImageVariants } from './image.types';
import cx from 'classnames';
import {
  MapPropsToCssVariablesInputProps,
  MapPropsToCssVariablesOutputProps,
} from './map-breakpoint-coordinates-to-style.props';
import { mapBreakpointCoordinatesToStyle } from './map-breakpoint-coordinates-to-style.hoc';
import { compose, setDisplayName } from 'recompose';

export interface ImageElement {
  src: string;
  alt?: string;
  rounded?: boolean;
}

interface ImageComponentProps
  extends ImageElement,
    MapPropsToCssVariablesOutputProps {
  variant?: ImageVariants;
  className?: string;
  children?: ReactNode;
}

const ImageComponent: FunctionComponent<ImageComponentProps> = ({
  variant = ImageVariants.SOLID,
  src,
  alt,
  className,
  children,
  rounded = true,
  style,
}) => {
  const attrs =
    variant === ImageVariants.BACKGROUND
      ? { style: { backgroundImage: `url(${src})`, ...style } }
      : null;
  const isImg = variant === ImageVariants.SOLID;
  return (
    <div
      {...attrs}
      className={cx('image-background', className, { rounded: rounded })}
    >
      {isImg ? <img src={src} alt={alt} /> : null}
      {children}
    </div>
  );
};

export interface ImageProps
  extends ImageElement,
    MapPropsToCssVariablesInputProps {
  variant?: ImageVariants;
  className?: string;
  children?: ReactNode;
}

export const Image = compose<ImageComponentProps, ImageProps>(
  mapBreakpointCoordinatesToStyle,
  setDisplayName('Image')
)(ImageComponent);
