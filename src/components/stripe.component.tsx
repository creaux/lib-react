import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from '@stripe/react-stripe-js';
import { Translations } from './i18n.component';
import { StripeI18nProps } from './stripe.i18n';
import stripeJs, { StripeElementChangeEvent } from '@stripe/stripe-js';
import cx from 'classnames';

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

enum StripeFieldValidity {
  PRISTINE = 'PRISTINE',
  VALID = 'VALID',
  INVALID = 'INVALID',
}

const isStripeFieldValid = (valid: StripeFieldValidity) =>
  valid === StripeFieldValidity.VALID;

const isStripeFieldInvalid = (valid: StripeFieldValidity) =>
  valid === StripeFieldValidity.INVALID;

const isStripeFieldPristine = (valid: StripeFieldValidity) =>
  valid === StripeFieldValidity.PRISTINE;

export const Stripe: FunctionComponent<StripeProps> = ({
  cardNumberPlaceholder,
  cardExpiryPlaceholder,
  cardCvcPlaceholder,
  onPaymentValid: handleValidChange,
  disabled,
  onReady: handleReady,
}) => {
  const [valid, setValidity] = useState([
    StripeFieldValidity.PRISTINE,
    StripeFieldValidity.PRISTINE,
    StripeFieldValidity.PRISTINE,
  ]);
  const [ready, setReady] = useState([false, false, false]);

  useEffect(() => {
    const isValid = valid.every(
      (isValid) => isValid === StripeFieldValidity.VALID
    );
    if (isValid) {
      handleValidChange(true);
    } else {
      handleValidChange(false);
    }
  }, [valid]);

  useEffect(() => {
    const isReady = ready.every((isReady) => isReady);
    if (isReady) {
      handleReady();
    }
  }, [ready]);

  const complete = (event: StripeElementChangeEvent) => {
    if (event.complete && typeof event.error === 'undefined') {
      return StripeFieldValidity.VALID;
    }

    if (event.error) {
      return StripeFieldValidity.INVALID;
    }

    return StripeFieldValidity.PRISTINE;
  };

  const handleCardNumberChange = (
    event: stripeJs.StripeCardNumberElementChangeEvent
  ) => {
    setValidity([complete(event), valid[1], valid[2]]);
  };

  const handleCardExpiryChange = (
    event: stripeJs.StripeCardExpiryElementChangeEvent
  ) => {
    setValidity([valid[0], complete(event), valid[2]]);
  };

  const handleCardCvcChange = (
    event: stripeJs.StripeCardCvcElementChangeEvent
  ) => {
    setValidity([valid[0], valid[1], complete(event)]);
  };

  const handleReadyCard = () => {
    setReady([true, ready[1], ready[2]]);
  };

  const handleReadyExpiry = () => {
    setReady([ready[0], true, ready[2]]);
  };

  const handleReadyCvc = () => {
    setReady([ready[0], ready[1], true]);
  };

  return (
    <div className="d-flex flex-column">
      <CardNumberElement
        className={cx(
          'form-control',
          'd-flex',
          'flex-column',
          'justify-content-center',
          'stripe-card-number',
          {
            disabled,
            'is-valid': isStripeFieldValid(valid[0]),
            'is-invalid': isStripeFieldInvalid(valid[0]),
          }
        )}
        options={{
          showIcon: true,
          placeholder: cardNumberPlaceholder,
          disabled,
        }}
        onChange={handleCardNumberChange}
        onReady={handleReadyCard}
      />
      <div className="input-group mb-4">
        <CardExpiryElement
          className={cx(
            'form-control',
            'd-flex',
            'flex-column',
            'justify-content-center',
            {
              disabled,
              'is-valid': isStripeFieldValid(valid[1]),
              'is-invalid': isStripeFieldInvalid(valid[1]),
            }
          )}
          options={{
            placeholder: cardExpiryPlaceholder,
            disabled,
          }}
          onChange={handleCardExpiryChange}
          onReady={handleReadyExpiry}
        />
        <CardCvcElement
          className={cx(
            'form-control',
            'd-flex',
            'flex-column',
            'justify-content-center',
            {
              disabled,
              'is-valid': isStripeFieldValid(valid[2]),
              'is-invalid': isStripeFieldInvalid(valid[2]),
            }
          )}
          options={{ placeholder: cardCvcPlaceholder, disabled }}
          onChange={handleCardCvcChange}
          onReady={handleReadyCvc}
        />
      </div>
    </div>
  );
};
