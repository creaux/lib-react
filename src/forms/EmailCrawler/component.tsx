import React, { FormEvent, FunctionComponent } from 'react';
import { Button, Type } from '../Button';
import { OnChange } from '../../components/form.types';
import { Email } from '../Field/Fields/Email';
import { Form } from '../Form';
import { FormType } from '../Form/component';
import { OnValidChange } from '../Field/types';
import { I18n, Translations } from '../../components/i18n.component';
import defaultTranslations from './en.json';

export interface EmailProps {
  onChange: OnChange;
  labels: {
    input: string;
    button: string;
  };
  value: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onEmailValid: OnValidChange;
  valid: boolean;
}

export interface EmailCrawlerTranslations extends Translations {
  EMAIL_CRAWLER_MESSAGE_VALID: string;
  EMAIL_CRAWLER_MESSAGE_INVALID: string;
  EMAIL_CRAWLER_MESSAGE_DEFAULT: string;
}

export const EmailCrawler: FunctionComponent<EmailProps> = (
  props: EmailProps
) => {
  const {
    onChange: handleChange,
    labels,
    value,
    onSubmit: handleSubmit,
    onEmailValid: handleEmailValid,
    valid,
  } = props;

  return (
    <I18n.Consumer<EmailCrawlerTranslations>
      defaultTranslations={defaultTranslations}
    >
      {(translations) => (
        <Form
          onSubmit={handleSubmit}
          type={FormType.ONPLACE}
          className="form-inline"
        >
          <Email
            onChange={handleChange}
            id="email"
            placeholder={labels.input}
            value={value}
            messages={[
              translations.EMAIL_CRAWLER_MESSAGE_VALID,
              translations.EMAIL_CRAWLER_MESSAGE_INVALID,
              translations.EMAIL_CRAWLER_MESSAGE_DEFAULT,
            ]}
            onValidChange={handleEmailValid}
            disabled={false}
          />
          <Button type={Type.SUBMIT} disabled={!valid}>
            {labels.button}
          </Button>
        </Form>
      )}
    </I18n.Consumer>
  );
};
