import React from 'react';
import { storiesOf } from '@storybook/react';
import { Stripe } from './stripe.container';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripeStory = storiesOf('Atomic Design/Organisms/forms/Stripe', module);

stripeStory.add('default', () => {
  return (
    <Elements
      stripe={loadStripe(
        process.env.STRIPE_SECRET ? process.env.STRIPE_SECRET : ''
      )}
    >
      <Stripe />
    </Elements>
  );
});
