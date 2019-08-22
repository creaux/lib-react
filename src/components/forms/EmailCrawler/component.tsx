import React, { FormEvent, FunctionComponent } from 'react';
import { Button, Type } from '../Button';
import { OnChange } from '../../types/form';
import { Email } from '../Input/Email';
import { Form } from '../Form';
import { FormType } from '../Form/component';
import { OnValidChange } from '../Input/types';
import { Messages } from '../../../validators/types';

export interface EmailProps {
  onChange: OnChange;
  labels: {
    input: string;
    button: string;
  };
  value: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  messages: Messages;
  onEmailValid: OnValidChange;
  valid: boolean;
}

export const EmailCrawler: FunctionComponent<EmailProps> = (
  props: EmailProps
) => {
  const {
    onChange: handleChange,
    labels,
    value,
    onSubmit: handleSubmit,
    messages,
    onEmailValid: handleEmailValid,
    valid
  } = props;

  return (
    <Form onSubmit={handleSubmit} type={FormType.ONPLACE}>
      <Email
        onChange={handleChange}
        id="email"
        placeholder={labels.input}
        value={value}
        messages={messages}
        onValidChange={handleEmailValid}
      />
      <Button type={Type.SUBMIT} disabled={!valid}>
        {labels.button}
      </Button>
    </Form>
  );
};
