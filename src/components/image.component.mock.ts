import { ImageVariants } from './image.types';
import { ImageComponentProps } from './image.component';

export const asImgProps: ImageComponentProps = {
  src: 'http://lorempixel.com/640/480/fashion',
  alt: 'Lorem ipsum',
  variant: ImageVariants.SOLID
};

export const asBackgroundProps: ImageComponentProps = {
  src: 'http://lorempixel.com/640/480/fashion',
  variant: ImageVariants.BACKGROUND
};
