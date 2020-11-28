import React from 'react';
import { storiesOf } from '@storybook/react';
import { Stripe } from './stripe';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Environment } from '../env';

const stripeStory = storiesOf('Atomic Design/Organisms/forms/Stripe', module);

const environment = new Environment();

stripeStory.add('default', () => {
  return (
    <Elements stripe={loadStripe(environment.STRIPE_PUBLISHABLE_KEY)}>
      <Stripe onReady={() => {}} onPaymentValid={() => {}} disabled={false} />
    </Elements>
  );
});
