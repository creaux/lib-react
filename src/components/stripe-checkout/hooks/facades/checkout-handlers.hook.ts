import { useDispatch } from 'react-redux';
import { CheckoutStoreFacade } from '../../facade/checkout-store.facade';
import { Stripe, StripeElements } from '@stripe/stripe-js';

export function useCheckoutStoreFacade(
  stripe: Stripe,
  elements: StripeElements
) {
  return new CheckoutStoreFacade(useDispatch(), stripe, elements);
}
