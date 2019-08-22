import React from 'react';
import { storiesOf } from '@storybook/react';
import { EmailCrawlingMicrosite, EmailCrawlingMicrositeProps } from "./component";
import { asBackgroundProps } from "../Image/mock";

const stories = storiesOf('Templates/EmailCrawlingMicrosite', module);

const name = 'default';

stories.add(name, () => {
  const props: EmailCrawlingMicrositeProps = {
    labels: {
      input: 'Please provide an email address to get latest news',
      button: 'Confirm'
    },
    messages: {
      valid: 'You email address is correct.',
      invalid: 'Provided email address doesn\'t seem to be correct.'
    },
    onEmailSubmit: () => {},
    background: asBackgroundProps
  };
  return <EmailCrawlingMicrosite {...props} />;
});
