import { ImageVariants } from './types';
import { ImageProps } from './component';

export const asImgProps: ImageProps = {
  src: 'http://lorempixel.com/640/480/fashion',
  alt: 'Lorem ipsum',
  variant: ImageVariants.SOLID
};

export const asBackgroundProps: ImageProps = {
  src: 'http://lorempixel.com/640/480/fashion',
  variant: ImageVariants.BACKGROUND
};
