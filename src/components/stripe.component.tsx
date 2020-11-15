import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from '@stripe/react-stripe-js';
import { Translations } from './i18n.component';
import { StripeI18nProps } from './stripe.i18n';
import stripeJs from '@stripe/stripe-js';

export interface StripeTranslations extends Translations {
  STRIPE_NUMBER_PLACEHOLDER: string;
  STRIPE_EXPIRY_PLACEHOLDER: string;
  STRIPE_CVC_PLACEHOLDER: string;
}

export interface StripeProps extends StripeI18nProps {
  cardNumberPlaceholder: string;
  cardExpiryPlaceholder: string;
  cardCvcPlaceholder: string;
  onPaymentValid: (error: boolean) => void;
}

export const Stripe: FunctionComponent<StripeProps> = ({
  cardNumberPlaceholder,
  cardExpiryPlaceholder,
  cardCvcPlaceholder,
  onPaymentValid: handleValidChange,
}) => {
  const [state, setState] = useState([false, false, false]);

  useEffect(() => {
    if (state[0] && state[1] && state[2]) {
      handleValidChange(true);
    } else {
      handleValidChange(false);
    }
  }, state);

  const handleCardNumberChange = (
    event: stripeJs.StripeCardNumberElementChangeEvent
  ) => {
    setState([
      event.complete === true && typeof event.error === 'undefined',
      state[1],
      state[2],
    ]);
  };

  const handleCardExpiryChange = (
    event: stripeJs.StripeCardExpiryElementChangeEvent
  ) => {
    setState([
      state[0],
      event.complete === true && typeof event.error === 'undefined',
      state[2],
    ]);
  };

  const handleCardCvcChange = (
    event: stripeJs.StripeCardCvcElementChangeEvent
  ) => {
    setState([
      state[0],
      state[1],
      event.complete === true && typeof event.error === 'undefined',
    ]);
  };

  return (
    <div className="d-flex flex-column">
      <CardNumberElement
        className="form-control d-flex flex-column justify-content-center stripe-card-number"
        options={{
          showIcon: true,
          placeholder: cardNumberPlaceholder,
        }}
        onChange={handleCardNumberChange}
      />
      <div className="input-group mb-4">
        <CardExpiryElement
          className="form-control d-flex flex-column justify-content-center"
          options={{
            placeholder: cardExpiryPlaceholder,
          }}
          onChange={handleCardExpiryChange}
        />
        <CardCvcElement
          className="form-control d-flex flex-column justify-content-center"
          options={{ placeholder: cardCvcPlaceholder }}
          onChange={handleCardCvcChange}
        />
      </div>
    </div>
  );
};
