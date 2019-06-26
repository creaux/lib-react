import React from 'react';
import { storiesOf } from '@storybook/react';
import { Select } from './component';

const props = {
  id: '123456',
  label: 'Postcode',
  value: '511 01',
  options: [
    {
      id: '123',
      value: 'xyz',
      title: 'Xyz'
    }
  ],
  onChange() {}
};

storiesOf('Atoms/forms/Select', module).add('default', () => (
  <Select {...props} />
));
