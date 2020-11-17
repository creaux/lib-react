import React from 'react';
import { storiesOf } from '@storybook/react';
import { Company, CompanyProps } from './company';
import { Form, FormType } from '../forms/Form/component';

const props: CompanyProps = {
  company: {
    id: '123456',
    value: 'Neco LTD',
  },
  vat: {
    id: '12345',
    value: '123456',
  },
  onFieldChange: () => (text) => {
    console.log(text);
  },
  onValidFieldChange: () => (valid) => {
    console.log(valid);
  },
};

const companyStory = storiesOf('Atomic Design/Moleculs/forms/Company', module);

companyStory.add('normal', () => (
  <Form type={FormType.NORMAL} onSubmit={() => {}}>
    <Company {...props} />
  </Form>
));

companyStory.add('onplace', () => (
  <Form type={FormType.ONPLACE} onSubmit={() => {}}>
    <Company {...props} />
  </Form>
));

companyStory.add('inline', () => (
  <Form type={FormType.INLINE} onSubmit={() => {}}>
    <Company {...props} />
  </Form>
));
