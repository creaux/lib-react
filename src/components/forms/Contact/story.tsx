import React from 'react';
import { storiesOf } from '@storybook/react';
import { Contact, ContactProps } from './component';
import { Form, FormType } from '../Form/component';

const props: ContactProps = {
  email: {
    id: '123456',
    value: 'Neco LTD',
  },
  number: {
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

const story = storiesOf('Moleculs/forms/Contact', module);

story.add('normal', () => (
  <Form type={FormType.NORMAL} onSubmit={() => {}}>
    <Contact {...props} />
  </Form>
));

story.add('onplace', () => (
  <Form type={FormType.ONPLACE} onSubmit={() => {}}>
    <Contact {...props} />
  </Form>
));

story.add('inline', () => (
  <Form type={FormType.INLINE} onSubmit={() => {}}>
    <Contact {...props} />
  </Form>
));
