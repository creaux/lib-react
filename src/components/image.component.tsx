import React, { FunctionComponent, ReactNode } from 'react';
import { ImageVariants } from './image.types';
import cx from 'classnames';
import { useCssRegister } from './use-css-register';
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
  useCssRegister(
    [
      '--Image__backgroundPositions-xs-x',
      '--Image__backgroundPositions-xs-y',
      '--Image__backgroundPositions-sm-x',
      '--Image__backgroundPositions-sm-y',
      '--Image__backgroundPositions-md-x',
      '--Image__backgroundPositions-md-y',
      '--Image__backgroundPositions-lg-x',
      '--Image__backgroundPositions-lg-y',
      '--Image__backgroundPositions-xl-x',
      '--Image__backgroundPositions-xl-y',
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
    >
      {isImg ? <img src={src} alt={alt} /> : null}
      {children}
    </div>
  );
};
