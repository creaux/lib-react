import React from 'react';
import { storiesOf } from '@storybook/react';
import { Number } from './component';
import { Form, FormType } from '../../../Form/component';

storiesOf('Atomic Design/Atoms/forms/Number', module)
  .add('normal', () => (
    <Form type={FormType.NORMAL} onSubmit={() => {}}>
      <Number
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
        disabled={false}
      />
    </Form>
  ))
  .add('onplace', () => (
    <Form type={FormType.ONPLACE} onSubmit={() => {}}>
      <Number
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
        disabled={false}
      />
    </Form>
  ))
  .add('inline', () => (
    <Form type={FormType.INLINE} onSubmit={() => {}}>
      <Number
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
        disabled={false}
      />
    </Form>
  ));
