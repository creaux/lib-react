import React, { FormEvent, FunctionComponent } from "react";
import { Button, Type } from "../Button";
import { OnChange } from "../../types/form";
import { Email } from "../Field/Fields/Email";
import { Form } from "../Form";
import { FormType } from "../Form/component";
import { OnValidChange } from "../Field/types";
import { I18nConsumer } from "../../I18n/component";
import defaultTranslations from "./en.json";

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

export interface EmailCrawlerTranslations {
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
    valid
  } = props;

  return (
    <I18nConsumer<EmailCrawlerTranslations>
      defaultTranslations={defaultTranslations}
    >
      {translations => (
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
              translations.EMAIL_CRAWLER_MESSAGE_DEFAULT
            ]}
            onValidChange={handleEmailValid}
          />
          <Button type={Type.SUBMIT} disabled={!valid}>
            {labels.button}
          </Button>
        </Form>
      )}
    </I18nConsumer>
  );
};
