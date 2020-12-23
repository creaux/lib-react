import React, { FunctionComponent, ReactNode } from 'react';
import { ImageVariants } from './image.types';
import cx from 'classnames';
import { useCssRegister } from '../../../../hooks/use-css-register.hook';
import { get } from 'lodash';
import { BreakpointCoordinates } from '../../../breakpoint-coordinates.type';

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
      get(backgroundPositions, ['xs', 'x'], 'center'),
      get(backgroundPositions, ['xs', 'y'], 'center'),
      get(backgroundPositions, ['sm', 'x'], 'center'),
      get(backgroundPositions, ['sm', 'y'], 'center'),
      get(backgroundPositions, ['md', 'x'], 'center'),
      get(backgroundPositions, ['md', 'y'], 'center'),
      get(backgroundPositions, ['lg', 'x'], 'center'),
      get(backgroundPositions, ['lg', 'y'], 'center'),
      get(backgroundPositions, ['xl', 'x'], 'center'),
      get(backgroundPositions, ['xl', 'y'], 'center'),
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
