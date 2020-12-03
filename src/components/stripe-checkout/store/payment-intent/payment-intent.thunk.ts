import { ThunkType } from '../thunk.type';
import { Builder } from '../../../../builder';
import { headers } from '../headers';
import { PaymentIntentResponse } from './payment-intent.types';
import { setSecret } from './payment-intent.actions';
import { StripeCheckoutPay } from '../../stripe-checkout-pay.model';

export const fetchPaymentIntent = (
  checkout: StripeCheckoutPay
): ThunkType => async (dispatch) => {
  try {
    const stringified = JSON.stringify(checkout);
    const response: Response = await fetch(
      `http://localhost:5000/payment`,
      Builder<RequestInit>()
        .method('POST')
        .body(stringified)
        .headers(headers)
        .build()
    );

    switch (response.status) {
      case 200:
        const data: PaymentIntentResponse = await response.json();
        dispatch(setSecret(data.client_secret));
        break;
      case 400:
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
