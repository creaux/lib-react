import React from 'react';
import { storiesOf } from '@storybook/react';
import { List } from './component';

export const props = {
  items: [
    {
      id: '123',
      image: 'http://lorempixel.com/80/80/fashion',
      description: 'Lorem ipsum',
      price: '450 EUR',
    },
    {
      id: '123',
      image: 'http://lorempixel.com/80/80/fashion',
      description: 'Lorem ipsum',
      price: '450 EUR',
    },
    {
      id: '123',
      image: 'http://lorempixel.com/80/80/fashion',
      description: 'Lorem ipsum',
      price: '450 EUR',
    },
  ],
};

storiesOf('moleculs/List', module).add('default', () => <List {...props} />);
