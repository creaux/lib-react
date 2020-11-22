import React from 'react';
import { storiesOf } from '@storybook/react';
import { Alpha } from './component';
import { Form, FormType } from '../../../Form/component';

const story = storiesOf('Atomic Design/Atoms/forms/Alpha', module);

story.add('normal', () => (
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
        'Please fill some alpha',
      ]}
      disabled={false}
    />
  </Form>
));

story.add('onplace', () => (
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
        'Please fill some alpha',
      ]}
      disabled={false}
    />
  </Form>
));

story.add('inline', () => (
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
        'Please fill some alpha',
      ]}
      disabled={false}
    />
  </Form>
));

story.add('floating', () => (
  <div className="p-4">
    <Form type={FormType.FLOATING} onSubmit={() => {}}>
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
          'Please fill some alpha',
        ]}
        disabled={false}
      />
    </Form>
  </div>
));
