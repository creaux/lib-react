import React, { FunctionComponent, useEffect, useState } from 'react';
import { KanbanConfirm } from './kanban/kanban-confirm.container';
import { KanbanState } from './kanban/kanban.state';
import { loadStripe, Stripe } from '@stripe/stripe-js';

export interface StripeProcessProps {}

export const StripeProcess: FunctionComponent<StripeProcessProps> = () => {
  const [kanban, setKanban] = useState<KanbanState>();
  useEffect(() => {
    (stripe as Stripe).retrievePaymentIntent(
      process.env.STRIPE_PUBLISHABLE_KEY as string
    );
  });
  return <KanbanConfirm />;
};
