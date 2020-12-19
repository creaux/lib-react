import { ThunkDispatchType } from '../store/thunk.type';
import { FormEvent } from 'react';
import { postPaymentIntent } from '../store/payment-intent/payment-intent.thunk';
import { Stripe, StripeElements } from '@stripe/stripe-js';

export class CheckoutStoreFacade {
  constructor(
    private readonly dispatch: ThunkDispatchType,
    private readonly stripe: Stripe,
    private readonly elements: StripeElements
  ) {}

  readonly handleCheckout = async (event: FormEvent<HTMLFormElement>) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    // and then post
    this.dispatch(postPaymentIntent(this.stripe, this.elements));
  };
}
