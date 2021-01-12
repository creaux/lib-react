import React, { FunctionComponent } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { environment } from '../../../env';

export const StripeProvider: FunctionComponent = ({ children }) => (
  <Elements stripe={loadStripe(environment.STRIPE_PUBLISHABLE_KEY)}>
    {children}
  </Elements>
);
