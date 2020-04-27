import React from 'react';
import { storiesOf } from '@storybook/react';
import { Select } from './composed';

const props = {
  label: 'City',
  id: 'city',
  value: undefined,
  messages: {
    valid: 'City is valid',
    invalid: 'City is invalid',
  },
  options: [
    {
      id: '1',
      value: 'prague',
      title: 'Prague'
    },
    {
      id: '2',
      value: 'liberec',
      title: 'Liberec'
    }
  ],
  onValidChange() {},
  onChange() {},
  placeholder: 'Please choose an option...'
};

storiesOf('Atoms/forms/Select', module).add('default', () => (
  <Select {...props} />
));
