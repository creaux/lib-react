import React from 'react';
import { storiesOf } from '@storybook/react';
import { Company, CompanyProps } from './component';
import { Form, FormType } from '../Form/component';

const props: CompanyProps = {
  company: {
    id: '123456',
    value: 'Neco LTD',
  },
  vat: {
    id: '12345',
    value: '123456',
  },
  onFieldChange: () => text => {
    console.log(text);
  },
  onValidFieldChange: () => valid => {
    console.log(valid);
  }
};

storiesOf('Moleculs/forms/Company', module)
  .add('default', () => (
    <Form type={FormType.NORMAL} onSubmit={() => {}}>
      <Company {...props} />
    </Form>
  ))
  .add('inline', () => (
    <Form type={FormType.INLINE} onSubmit={() => {}}>
      <Company {...props}/>
    </Form>
  ));
