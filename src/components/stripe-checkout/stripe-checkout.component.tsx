import React, { FunctionComponent } from 'react';
import {
  Checkout as StripeCheckoutPure,
  CheckoutProps,
} from './components/checkout.component';
import { Provider } from 'react-redux';
import { store } from './store';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Environment } from '../../env';

const environment = new Environment();

export const StripeCheckout: FunctionComponent<CheckoutProps> = ({
  productId,
}) => (
  <Elements stripe={loadStripe(environment.STRIPE_PUBLISHABLE_KEY)}>
    <Provider store={store}>
      <StripeCheckoutPure productId={productId} />
    </Provider>
  </Elements>
);
