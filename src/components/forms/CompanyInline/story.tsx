import React from 'react';
import { storiesOf } from '@storybook/react';
import { CompanyInline, CompanyInlineProps } from './component';

const props: CompanyInlineProps = {
  company: {
    id: '123456',
    value: 'Neco LTD',
    messages: {
      valid: 'Valid',
      invalid: 'Invalid'
    }
  },
  vat: {
    id: '12345',
    value: '123456',
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

storiesOf('Moleculs/forms/CompanyInline', module).add('default', () => (
  <CompanyInline {...props} />
));
