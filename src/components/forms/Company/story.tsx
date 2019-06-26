import React from 'react';
import { storiesOf } from '@storybook/react';
import { Company } from './component';

const props = {
  company: {
    id: '123456',
    value: 'Neco LTD',
    label: 'VAT'
  },
  vat: {
    id: '12345',
    value: '123456',
    label: 'VAT'
  },
  onFieldChange: () => () => {}
};

storiesOf('Moleculs/forms/Company', module).add('default', () => (
  <Company {...props} />
));
