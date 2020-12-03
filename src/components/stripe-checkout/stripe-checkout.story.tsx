import React from 'react';
import { storiesOf } from '@storybook/react';
import { StripeCheckout } from './stripe-checkout';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Environment } from '../../env';

const environment = new Environment();

const story = storiesOf('Atomic Design/Templates/StripeCheckout', module);

story.add('default', () => {
  return (
    <Elements stripe={loadStripe(environment.STRIPE_PUBLISHABLE_KEY)}>
      <StripeCheckout
        productId="prod_ISK8R9CDVEEpNB"
        onGoBack={() => {}}
        onCheckout={() => {}}
        onSuccess={() => {}}
        onError={() => {}}
        // TODO env var should be for lbd-checkout itself and shared over payment and product
        paymentEndpoint={environment.REST_ENDPOINT_CREATE_PAYMENT}
      />
    </Elements>
  );
});
