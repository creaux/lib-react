import React from 'react';
import { storiesOf } from '@storybook/react';
import { CyclerContainer as Cycler } from './container';

storiesOf('Atoms/Cycler', module).add('default', () => {
  const props = {
    items: [
      {
        id: '1',
        title: 'Item 1',
      },
      {
        id: '2',
        title: 'Item 2',
      },
      {
        id: '3',
        title: 'Item 3',
      },
      {
        id: '4',
        title: 'Item 4',
      },
      {
        id: '5',
        title: 'Item 5',
      },
      {
        id: '6',
        title: 'Item 6',
      },
    ],
  };
  return <Cycler {...props} />;
});
