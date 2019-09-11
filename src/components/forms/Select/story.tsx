import React from 'react';
import { storiesOf } from '@storybook/react';
import { SelectContainer, SelectContainerProps } from './container';

const props: SelectContainerProps = {
  id: 'city',
  label: 'City',
  value: undefined,
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
  <SelectContainer {...props} />
));
