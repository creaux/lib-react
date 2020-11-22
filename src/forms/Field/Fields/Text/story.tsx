import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from './component';
import { Form, FormType } from '../../../Form/component';

storiesOf('Atomic Design/Atoms/forms/Text', module)
  .add('normal', () => (
    <Form type={FormType.NORMAL} onSubmit={() => {}}>
      <Text
        placeholder="Please fill some text."
        id="text"
        label="Text"
        onChange={() => {}}
        value=""
        onValidChange={() => {}}
        messages={[
          'Text is correct',
          'Please fill valid text.',
          'Please fill some text',
        ]}
        disabled={false}
      />
    </Form>
  ))
  .add('onplace', () => (
    <Form type={FormType.ONPLACE} onSubmit={() => {}}>
      <Text
        placeholder="Please fill some text."
        id="text"
        label="Text"
        onChange={() => {}}
        value=""
        onValidChange={() => {}}
        messages={[
          'Text is correct',
          'Please fill valid text.',
          'Please fill some text',
        ]}
        disabled={false}
      />
    </Form>
  ))
  .add('inline', () => (
    <Form type={FormType.INLINE} onSubmit={() => {}}>
      <Text
        placeholder="Please fill some text."
        id="text"
        label="Text"
        onChange={() => {}}
        value=""
        onValidChange={() => {}}
        messages={[
          'Text is correct',
          'Please fill valid text.',
          'Please fill some text',
        ]}
        disabled={false}
      />
    </Form>
  ));
