import React from 'react';
import { storiesOf } from '@storybook/react';
import { List } from './component';

export const props = {
  items: [
    {
      id: '123',
      image: 'https://picsum.photos/id/653/80/80',
      description: 'Lorem ipsum',
      price: '450 EUR',
    },
    {
      id: '123',
      image: 'https://picsum.photos/id/654/80/80',
      description: 'Lorem ipsum',
      price: '450 EUR',
    },
    {
      id: '123',
      image: 'https://picsum.photos/id/655/80/80',
      description: 'Lorem ipsum',
      price: '450 EUR',
    },
  ],
};

storiesOf('moleculs/List', module).add('default', () => <List {...props} />);
