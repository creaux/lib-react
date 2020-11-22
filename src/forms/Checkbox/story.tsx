import React from 'react';
import { storiesOf } from '@storybook/react';
import { Checkbox, CheckboxProps } from './component';
import { Builder } from '../../builder';

export const props = Builder<CheckboxProps>()
  .checked(false)
  .onChange(() => {})
  .id('123456')
  .title('Checkbox')
  .build();

storiesOf('Atomic Design/Atoms/forms/Checkbox', module).add('default', () => (
  <Checkbox {...props} />
));
