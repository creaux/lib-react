import React from 'react';
import { storiesOf } from '@storybook/react';
import { Company, CompanyProps } from './component';

const props: CompanyProps = {
  company: {
    id: '123456',
    value: 'Neco LTD',
    label: 'Company',
    placeholder: '',
    messages: {
      valid: 'Valid',
      invalid: 'Invalid'
    }
  },
  vat: {
    id: '12345',
    value: '123456',
    label: 'VAT',
    placeholder: '',
    messages: {
      valid: 'Valid',
      invalid: 'INvalid'
    }
  },
  onFieldChange: () => text => {
    console.log(text);
  },
  onValidFieldChange: () => valid => {
    console.log(valid);
  }
};

storiesOf('Moleculs/forms/Company', module).add('default', () => (
  <Company {...props} />
));
