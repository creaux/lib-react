import React from 'react';
import { storiesOf } from '@storybook/react';
import { Email } from './component';

storiesOf('Atoms/forms/Email', module).add('Email', () => (
  <Email
    placeholder="Please fill email."
    id="email"
    label="Email"
    onChange={() => {}}
    value=""
    onValidChange={() => {}}
    messages={{
      invalid: 'Please fill valid email address.',
      valid: 'Email address is correct'
    }}
  />
));
