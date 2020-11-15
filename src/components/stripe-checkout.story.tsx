import React from 'react';
import { storiesOf } from '@storybook/react';
import { StripeCheckout } from './stripe-checkout';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { ProductCardProps } from './product-card.component';
import { Builder } from '../builder';

const story = storiesOf('Atomic Design/Templates/StripeCheckout', module);

const product = Builder<ProductCardProps>()
  .id('1')
  .title('Some Product Name')
  .price('5555')
  .build();

story.add('default', () => {
  return (
    <Elements
      stripe={loadStripe(
        process.env.STRIPE_PUBLISHABLE_KEY
          ? process.env.STRIPE_PUBLISHABLE_KEY
          : ''
      )}
    >
      <StripeCheckout
        product={product}
        onGoBack={() => {}}
        onCheckout={() => {}}
      />
    </Elements>
  );
});
