import React, { FunctionComponent, ReactNode } from 'react';
import { ImageVariants } from './image.types';
import cx from 'classnames';
import { useCssRegister } from '../hooks/use-css-register.hook';
import { get } from 'lodash';
import { BreakpointCoordinates } from './breakpoint-coordinates.type';

export interface ImageElement {
  src: string;
  alt?: string;
  rounded?: boolean;
}

export interface ImageProps extends ImageElement {
  variant?: ImageVariants;
  className?: string;
  children?: ReactNode;
  backgroundPositions?: BreakpointCoordinates;
}

export const Image: FunctionComponent<ImageProps> = ({
  variant = ImageVariants.SOLID,
  src,
  alt,
  className,
  children,
  rounded = true,
  backgroundPositions,
}) => {
  const ref = useCssRegister(
    [
      '--background-position-xs-x',
      '--background-position-xs-y',
      '--background-position-sm-x',
      '--background-position-sm-y',
      '--background-position-md-x',
      '--background-position-md-y',
      '--background-position-lg-x',
      '--background-position-lg-y',
      '--background-position-xl-x',
      '--background-position-xl-y',
    ],
    [
      get(backgroundPositions, ['xs', 'x']),
      get(backgroundPositions, ['xs', 'y']),
      get(backgroundPositions, ['sm', 'x']),
      get(backgroundPositions, ['sm', 'y']),
      get(backgroundPositions, ['md', 'x']),
      get(backgroundPositions, ['md', 'y']),
      get(backgroundPositions, ['lg', 'x']),
      get(backgroundPositions, ['lg', 'y']),
      get(backgroundPositions, ['xl', 'x']),
      get(backgroundPositions, ['xl', 'y']),
    ]
  );
  const attrs =
    variant === ImageVariants.BACKGROUND
      ? { style: { backgroundImage: `url(${src})` } }
      : null;
  const isImg = variant === ImageVariants.SOLID;
  return (
    <div
      {...attrs}
      className={cx('image-background', className, { rounded: rounded })}
      ref={ref}
    >
      {isImg ? <img src={src} alt={alt} /> : null}
      {children}
    </div>
  );
};
