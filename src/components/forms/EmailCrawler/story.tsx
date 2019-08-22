import React from 'react';
import { storiesOf } from '@storybook/react';
import { EmailContainer as Email } from './container';

const stories = storiesOf('Moleculs/forms/EmailCrawler', module);

const name = 'default';

stories.add(name, () => {
  const props = {
    labels: { input: 'Email', button: 'Send' },
    onSubmit: (email: string) => console.log(email),
    messages: {
      invalid: 'Please fill valid email address.',
      valid: 'Email is valid email address.'
    }
  };
  return <Email {...props} />;
});
