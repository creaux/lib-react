import { ThunkType } from '../thunk.type';
import { Builder } from '../../../../builder';
import { headers } from '../headers';
import { PaymentIntentResponse } from './payment-intent.types';
import { setSecret } from './payment-intent.actions';
import { StripeCheckoutPay } from '../../stripe-checkout-pay.model';
import { Endpoints } from '../endpoints';

export const fetchPaymentIntent = (
  checkout: StripeCheckoutPay
): ThunkType => async (dispatch, getState) => {
  try {
    const state = getState();
    const request = JSON.stringify(checkout);
    const response: Response = await fetch(Endpoints.PAYMENT.toString(),
      Builder<RequestInit>()
        .method('POST')
        .body(request)
        .headers(headers)
        .build()
    );

    switch (response.status) {
      case 200:
        const data: PaymentIntentResponse = await response.json();
        dispatch(setSecret(data.client_secret));
        break;
      case 400:
        // TODO
        break;
      default:
        console.error(
          'Missing error handling for fetchProduct thunk:',
          response.status,
          response.statusText
        );
    }
  } catch (e) {}
};
