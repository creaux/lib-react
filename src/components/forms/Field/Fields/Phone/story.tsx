import React from 'react';
import { storiesOf } from '@storybook/react';
import { Phone } from './component';
import { Form, FormType } from '../../../Form/component';

storiesOf('Atoms/forms/Phone', module)
  .add('normal', () => (
    <Form type={FormType.NORMAL} onSubmit={() => {}}>
      <Phone
        placeholder="Please fill some number."
        id="number"
        label="Number"
        onChange={() => {}}
        value=""
        onValidChange={() => {}}
        messages={[
          'Text is correct',
          'Please fill valid number.',
          'Please fill some number',
        ]}
      />
    </Form>
  ))
  .add('onplace', () => (
    <Form type={FormType.ONPLACE} onSubmit={() => {}}>
      <Phone
        placeholder="Please fill some number."
        id="number"
        label="Number"
        onChange={() => {}}
        value=""
        onValidChange={() => {}}
        messages={[
          'Text is correct',
          'Please fill valid number.',
          'Please fill some number',
        ]}
      />
    </Form>
  ))
  .add('inline', () => (
    <Form type={FormType.INLINE} onSubmit={() => {}}>
      <Phone
        placeholder="Please fill some number."
        id="number"
        label="Number"
        onChange={() => {}}
        value=""
        onValidChange={() => {}}
        messages={[
          'Text is correct',
          'Please fill valid number.',
          'Please fill some number',
        ]}
      />
    </Form>
  ));
