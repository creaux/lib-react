import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from './component';
import { Form, FormType } from '../../Form/component';

storiesOf('Atoms/forms/Text', module).add('default', () => (
  <Form type={FormType.NORMAL} onSubmit={() => {}}>
    <Text
      placeholder="Please fill some text."
      id="text"
      label="Text"
      onChange={() => {}}
      value=""
      onValidChange={() => {}}
      messages={{ invalid: 'Please fill valid text.', valid: 'Text is correct' }}
    />
  </Form>
)).add('inline', () => (
  <Form type={FormType.INLINE} onSubmit={() => {}}>
    <Text
      placeholder="Please fill some text."
      id="text"
      label="Text"
      onChange={() => {}}
      value=""
      onValidChange={() => {}}
      messages={{ invalid: 'Please fill valid text.', valid: 'Text is correct' }}
    />
  </Form>
));
