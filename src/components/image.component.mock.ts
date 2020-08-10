import { ImageVariants } from './image.types';
import { ImageComponentProps } from './image.component';

export const asImgProps: ImageComponentProps = {
  src: 'https://picsum.photos/id/251/640/480',
  alt: 'Lorem ipsum',
  variant: ImageVariants.SOLID,
};

export const asBackgroundProps: ImageComponentProps = {
  src: 'https://picsum.photos/id/250/640/480',
  variant: ImageVariants.BACKGROUND,
};
