import React from 'react';
import { storiesOf } from '@storybook/react';
import { StripeCheckout } from './stripe-checkout';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Stripe } from './components/stripe.component';
import { Environment } from '../../env';

const story = storiesOf('Atomic Design/Templates/StripeCheckout', module);

story.add('default', () => {
  return <StripeCheckout productId="prod_ISK8R9CDVEEpNB" />;
});

const environment = new Environment();

const stripeStory = storiesOf('Atomic Design/Organisms/Stripe', module);

stripeStory.add('default', () => {
  return (
    <Elements stripe={loadStripe(environment.STRIPE_PUBLISHABLE_KEY)}>
      <Stripe onReady={() => {}} onPaymentValid={() => {}} disabled={false} />
    </Elements>
  );
});
