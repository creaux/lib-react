import { ImageVariants } from './image.types';
import { ImageProps } from './image.component';

export const asImgProps: ImageProps = {
  src: 'https://picsum.photos/id/251/640/480',
  alt: 'Lorem ipsum',
  variant: ImageVariants.SOLID,
};

export const asBackgroundProps: ImageProps = {
  src: 'https://picsum.photos/id/250/640/480',
  variant: ImageVariants.BACKGROUND,
};
