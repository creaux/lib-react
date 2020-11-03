import React, { FormEvent, FunctionComponent } from 'react';
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from '@stripe/react-stripe-js';
import { I18n, Translations } from '../../components/i18n.component';
import defaultTranslations from './en.json';
import { Button } from '../Button/component';
import { Type } from '../Button/types';
import { Form, FormType } from '../Form/component';

export interface StripeTranslations extends Translations {
  STRIPE_NUMBER_PLACEHOLDER: string;
  STRIPE_EXPIRY_PLACEHOLDER: string;
  STRIPE_CVC_PLACEHOLDER: string;
}

export interface StripeProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  disabled: boolean;
}

export const Stripe: FunctionComponent<StripeProps> = ({
  onSubmit: handleSubmit,
  disabled,
}) => {
  return (
    <Form
      type={FormType.INLINE}
      onSubmit={handleSubmit}
      className="d-flex flex-column"
    >
      <I18n.Consumer<StripeTranslations>
        defaultTranslations={defaultTranslations}
      >
        {(translations) => (
          <>
            <CardNumberElement
              className="form-control d-flex flex-column justify-content-center stripe-card-number"
              options={{
                showIcon: true,
                placeholder: translations.STRIPE_NUMBER_PLACEHOLDER,
              }}
            />
            <div className="input-group mb-4">
              <CardExpiryElement
                className="form-control d-flex flex-column justify-content-center"
                options={{
                  placeholder: translations.STRIPE_EXPIRY_PLACEHOLDER,
                }}
              />
              <CardCvcElement
                className="form-control d-flex flex-column justify-content-center"
                options={{ placeholder: translations.STRIPE_CVC_PLACEHOLDER }}
              />
            </div>
            <Button type={Type.SUBMIT} extended disabled={disabled}>
              Pay
            </Button>
          </>
        )}
      </I18n.Consumer>
    </Form>
  );
};
