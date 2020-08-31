import React from 'react';
import { storiesOf } from '@storybook/react';
import { Checkbox } from './component';

export const props = {
  checked: false,
  onChange() {},
  id: '123456789',
  title: 'Please check me!',
};

storiesOf('Atomic Design/Atoms/forms/Checkbox', module).add('default', () => (
  <Checkbox {...props} />
));
