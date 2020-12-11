import { ThunkType } from '../thunk.type';
import { Builder } from '../../../../builder';
import { headers } from '../headers';
import { PaymentIntentResponse } from './payment-intent.types';
import { setSecret } from './payment-intent.actions';
import { StripeCheckoutPay } from '../../stripe-checkout-pay.model';
import { Endpoints } from '../endpoints';
import { RootState } from '../index';
import {
  StripeCheckoutBilling,
  StripeCheckoutConditions,
  StripeCheckoutDelivery,
  StripeCheckoutModel,
} from '../../stripe-checkout.model';
import {
  Stripe,
  StripeElements,
  StripeCardNumberElement,
  PaymentMethodCreateParams,
  PaymentIntent,
  StripeError,
} from '@stripe/stripe-js';
import { CardNumberElement } from '@stripe/react-stripe-js';

export const fetchPaymentIntent = (): ThunkType => async (
  dispatch,
  getState
) => {
  try {
    const state: RootState = getState();
    const checkout = Builder<StripeCheckoutPay>()
      .productId(state.product.id)
      .checkout(
        Builder<StripeCheckoutModel>()
          .forename(state.contact.forename)
          .surname(state.contact.surname)
          .email(state.contact.email)
          .phone(state.contact.phone)
          .carrier('Post')
          .delivery(
            Builder<StripeCheckoutDelivery>()
              .street(state.delivery.street)
              .streetNo(state.delivery.streetNo)
              .postcode(state.delivery.postcode)
              .city(state.delivery.city)
              .country(state.delivery.country)
              .build()
          )
          .conditions(
            Builder<StripeCheckoutConditions>()
              .terms(state.conditions.terms)
              .data(state.conditions.data)
              .build()
          )
          .build()
      )
      .build();

    const request = JSON.stringify(checkout);
    const response: Response = await fetch(
      Endpoints.PAYMENT.toString(),
      Builder<RequestInit>()
        .method('POST')
        .body(request)
        .headers(headers)
        .build()
    );

    switch (response.status) {
      case 201:
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

export const postPaymentIntent = (
  stripe: Stripe,
  elements: StripeElements,
  onError: () => void,
  onSuccess: () => void
): ThunkType => async (dispatch, getState) => {
  const state: RootState = getState();
  const billingDetails: StripeCheckoutBilling = Builder<StripeCheckoutBilling>()
    .phone(state.contact.phone)
    .email(state.contact.email)
    .name(`${state.contact.forename} ${state.contact.surname}`)
    .address(
      Builder<PaymentMethodCreateParams.BillingDetails.Address>()
        // TODO: Street and StreetNo
        .state('')
        .city(
          state.billing.city.length > 0
            ? state.billing.city
            : state.delivery.city
        )
        .country(
          state.billing.country.length > 0
            ? state.billing.country
            : state.delivery.country
        )
        .postal_code(
          state.billing.postcode.length > 0
            ? state.billing.postcode
            : state.delivery.postcode
        )
        .line1(`${state.billing.company} ${state.billing.vat}`)
        .line2('')
        .build()
    )
    .build();
  // stripe and elements suppose to be in this state ready
  // as for isPaymentReady disabling form
  const response:
    | { paymentIntent?: PaymentIntent; error?: StripeError }
    | undefined = await (stripe as Stripe).confirmCardPayment(
    state.paymentIntent.secret as string,
    {
      payment_method: {
        card: (elements as StripeElements).getElement(
          CardNumberElement
        ) as StripeCardNumberElement,
        billing_details: billingDetails,
      },
    }
  );

  if (!response) {
    return;
  }

  if (response.error) {
    // TODO: Error page
    onError();
  } else {
    if (response.paymentIntent?.status === 'succeeded') {
      // TODO: Save Payment Intent Result
      onSuccess();
    }
  }
};
