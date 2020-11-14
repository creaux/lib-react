import React, { FunctionComponent } from 'react';
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from '@stripe/react-stripe-js';
import { Translations } from './i18n.component';
import { StripeI18nProps } from './stripe.i18n';

export interface StripeTranslations extends Translations {
  STRIPE_NUMBER_PLACEHOLDER: string;
  STRIPE_EXPIRY_PLACEHOLDER: string;
  STRIPE_CVC_PLACEHOLDER: string;
}

export interface StripeProps extends StripeI18nProps {
  cardNumberPlaceholder: string;
  cardExpiryPlaceholder: string;
  cardCvcPlaceholder: string;
}

export const Stripe: FunctionComponent<StripeProps> = ({
  cardNumberPlaceholder,
  cardExpiryPlaceholder,
  cardCvcPlaceholder,
}) => {
  return (
    <div className="d-flex flex-column">
      <CardNumberElement
        className="form-control d-flex flex-column justify-content-center stripe-card-number"
        options={{
          showIcon: true,
          placeholder: cardNumberPlaceholder,
        }}
      />
      <div className="input-group mb-4">
        <CardExpiryElement
          className="form-control d-flex flex-column justify-content-center"
          options={{
            placeholder: cardExpiryPlaceholder,
          }}
        />
        <CardCvcElement
          className="form-control d-flex flex-column justify-content-center"
          options={{ placeholder: cardCvcPlaceholder }}
        />
      </div>
    </div>
  );
};
