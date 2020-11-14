import React from 'react';
import { storiesOf } from '@storybook/react';
import { StripeCheckout } from './stripe-checkout';
import { Form, FormType } from '../forms/Form/component';
import { props as productDescriptionProps } from './product-description.mocks';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const story = storiesOf('Atomic Design/Templates/StripeCheckout', module);

story.add('default', () => {
  console.log('STRIPE', process.env.STRIPE_SECRET);
  return (
    <Elements
      stripe={loadStripe(
        process.env.STRIPE_SECRET ? process.env.STRIPE_SECRET : ''
      )}
    >
      <Form type={FormType.INLINE} onSubmit={() => {}}>
        <StripeCheckout
          product={productDescriptionProps}
          onGoBack={() => {}}
          goBack="Go Back"
          onCheckout={() => {}}
        />
      </Form>
    </Elements>
  );
});
