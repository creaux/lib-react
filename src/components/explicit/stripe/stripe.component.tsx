import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from '@stripe/react-stripe-js';
import stripeJs, { StripeElementChangeEvent } from '@stripe/stripe-js';
import cx from 'classnames';
import {
  useStripeTranslations,
  StripeTranslation,
} from './stripe-translations.hook';

export interface StripeProps {
  onPaymentValid: (error: boolean) => void;
  disabled: boolean;
  onReady: () => void;
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

// const isStripeFieldPristine = (valid: StripeFieldValidity) =>
//   valid === StripeFieldValidity.PRISTINE;

export const Stripe: FunctionComponent<StripeProps> = ({
  onPaymentValid: handleValidChange,
  disabled,
  onReady: handleReady,
}) => {
  const translations = useStripeTranslations();
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
    handleValidChange(isValid);
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
          placeholder: translations.get(
            StripeTranslation.STRIPE_NUMBER_PLACEHOLDER
          ),
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
            placeholder: translations.get(
              StripeTranslation.STRIPE_EXPIRY_PLACEHOLDER
            ),
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
          options={{
            placeholder: translations.get(
              StripeTranslation.STRIPE_CVC_PLACEHOLDER
            ),
            disabled,
          }}
          onChange={handleCardCvcChange}
          onReady={handleReadyCvc}
        />
      </div>
    </div>
  );
};
