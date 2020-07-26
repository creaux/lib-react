import { Variants } from './types';

export const mocks = {
  simple: {
    slides: [
      {
        src: 'http://lorempixel.com/640/480/fashion',
        alt: 'Lorem ipsum',
      },
      {
        src: 'http://lorempixel.com/640/480/fashion',
        alt: 'Lorem ipsum',
      },
      {
        src: 'http://lorempixel.com/640/480/fashion',
        alt: 'Lorem ipsum',
      },
    ],
    variant: Variants.SIMPLE,
  },
  multi: {
    slides: [
      [
        {
          src: 'http://lorempixel.com/640/480/fashion',
          alt: 'Lorem ipsum',
        },
        {
          src: 'http://lorempixel.com/640/480/fashion',
          alt: 'Lorem ipsum',
        },
        {
          src: 'http://lorempixel.com/640/480/fashion',
          alt: 'Lorem ipsum',
        },
        {
          src: 'http://lorempixel.com/640/480/fashion',
          alt: 'Lorem ipsum',
        },
      ],
      [
        {
          src: 'http://lorempixel.com/640/480/fashion',
          alt: 'Lorem ipsum',
        },
        {
          src: 'http://lorempixel.com/640/480/fashion',
          alt: 'Lorem ipsum',
        },
        {
          src: 'http://lorempixel.com/640/480/fashion',
          alt: 'Lorem ipsum',
        },
        {
          src: 'http://lorempixel.com/640/480/fashion',
          alt: 'Lorem ipsum',
        },
      ],
    ],
    variant: Variants.MULTI,
  },
};
