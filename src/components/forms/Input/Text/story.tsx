import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from './component';

storiesOf('Atoms/forms/Text', module).add('Text', () => (
  <Text
    placeholder="Please fill some text."
    id="text"
    label="Text"
    onChange={() => {}}
    value=""
    onValidChange={() => {}}
    messages={{ invalid: 'Please fill valid text.', valid: 'Text is correct' }}
  />
));
