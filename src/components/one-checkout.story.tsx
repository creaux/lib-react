import React from 'react';
import { storiesOf } from '@storybook/react';
import { OneCheckoutContainer } from './one-checkout.container';
import { Form, FormType } from './forms/Form/component';
import { props as productDescriptionProps } from './ProductDescription/mocks';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const story = storiesOf('Atomic Design/Templates/OneCheckout', module);

story.add('default', () => {
  return (
    <Elements
      stripe={loadStripe(
        process.env.STRIPE_SECRET ? process.env.STRIPE_SECRET : ''
      )}
    >
      <Form type={FormType.ONPLACE} onSubmit={() => {}}>
        <OneCheckoutContainer product={productDescriptionProps} />
      </Form>
    </Elements>
  );
});
