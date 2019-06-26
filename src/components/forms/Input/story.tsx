import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from './component';
import { InputTypeEnum } from './types';

const props = {
  id: '123456',
  label: 'Postcode',
  value: '511 01',
  placeholder: '255 45',
  datalist: ['130 00', '888 88'],
  type: InputTypeEnum.TEXT,
  onChange() {}
};

storiesOf('Atoms/forms/Input', module).add('default', () => (
  <Input {...props} />
));
