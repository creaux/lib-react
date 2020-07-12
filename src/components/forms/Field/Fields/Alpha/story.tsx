import React from 'react';
import { storiesOf } from '@storybook/react';
import { Alpha } from './component';
import { Form, FormType } from '../../../Form/component';

storiesOf('Atoms/forms/Alpha', module)
  .add('normal', () => (
    <Form type={FormType.NORMAL} onSubmit={() => {}}>
      <Alpha
        placeholder="Please fill some alpha."
        id="alpha"
        label="Alpha"
        onChange={() => {}}
        value=""
        onValidChange={() => {}}
        messages={[
          'Text is correct',
          'Please fill valid alpha.',
          'Please fill some alpha'
        ]}
      />
    </Form>
  ))
  .add('onplace', () => (
    <Form type={FormType.ONPLACE} onSubmit={() => {}}>
      <Alpha
        placeholder="Please fill some alpha."
        id="alpha"
        label="Alpha"
        onChange={() => {}}
        value=""
        onValidChange={() => {}}
        messages={[
          'Text is correct',
          'Please fill valid alpha.',
          'Please fill some alpha'
        ]}
      />
    </Form>
  ))
  .add('inline', () => (
    <Form type={FormType.INLINE} onSubmit={() => {}}>
      <Alpha
        placeholder="Please fill some alpha."
        id="alpha"
        label="Alpha"
        onChange={() => {}}
        value=""
        onValidChange={() => {}}
        messages={[
          'Text is correct',
          'Please fill valid alpha.',
          'Please fill some alpha'
        ]}
      />
    </Form>
  ));
