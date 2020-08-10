import { CarouselVariants } from './carousel.types';

export const mocks = {
  simple: {
    slides: [
      {
        src: 'https://picsum.photos/id/500/1600/1200',
        alt: 'Lorem ipsum',
      },
      {
        src: 'https://picsum.photos/id/501/1600/1200',
        alt: 'Lorem ipsum',
      },
      {
        src: 'https://picsum.photos/id/502/1600/1200',
        alt: 'Lorem ipsum',
      },
    ],
    variant: CarouselVariants.SIMPLE,
  },
  multi: {
    slides: [
      [
        {
          src: 'https://picsum.photos/id/402/1600/1200',
          alt: 'Lorem ipsum',
        },
        {
          src: 'https://picsum.photos/id/403/1600/1200',
          alt: 'Lorem ipsum',
        },
        {
          src: 'https://picsum.photos/id/404/1600/1200',
          alt: 'Lorem ipsum',
        },
        {
          src: 'https://picsum.photos/id/405/1600/1200',
          alt: 'Lorem ipsum',
        },
      ],
      [
        {
          src: 'https://picsum.photos/id/406/1600/1200',
          alt: 'Lorem ipsum',
        },
        {
          src: 'https://picsum.photos/id/407/1600/1200',
          alt: 'Lorem ipsum',
        },
        {
          src: 'https://picsum.photos/id/408/1600/1200',
          alt: 'Lorem ipsum',
        },
        {
          src: 'https://picsum.photos/id/409/1600/1200',
          alt: 'Lorem ipsum',
        },
      ],
    ],
    variant: CarouselVariants.MULTI,
  },
};
