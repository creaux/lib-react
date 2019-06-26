import React, { FunctionComponent } from 'react';
import { ImageVariants } from './types';

export interface ImageProps {
  variant?: ImageVariants;
  src: string;
  alt?: string;
}

export const Image: FunctionComponent<ImageProps> = ({
  variant = ImageVariants.SOLID,
  src,
  alt
}) => {
  const attrs =
    variant === ImageVariants.BACKGROUND
      ? { style: { backgroundImage: `url(${src})` } }
      : null;
  const isImg = variant === ImageVariants.SOLID;
  return (
    <div {...attrs} className="image-background">
      {isImg ? <img src={src} alt={alt} /> : null}
    </div>
  );
};
