import { createElement, FormEvent, PureComponent } from 'react';
import { ProductDescriptionProps } from './product-description.component';
import { ShippingState } from './shipping.state';
import { StripeCheckoutI18n } from './stripe-checkout.i18n';
import { CardNumberElement } from '@stripe/react-stripe-js';
import {
  ElementsContextValue,
  stripeElementsConsumer,
} from './stripe-elements-consumer.hoc';

export interface StripeCheckoutContainerProps extends ElementsContextValue {
  product: ProductDescriptionProps;
  onCheckout: () => void;
  onGoBack: () => void;
}

export interface OneCheckoutState {
  isShippingValid: boolean;
  isPaymentValid: boolean;
}

class StripeCheckoutContainerImpl extends PureComponent<
  StripeCheckoutContainerProps,
  OneCheckoutState
> {
  private secret!: string;

  constructor(props: StripeCheckoutContainerProps) {
    super(props);
    this.state = {
      isShippingValid: false,
      isPaymentValid: false,
    };
    if (process.env.REST_ENDPOINT_CREATE_PAYMENT) {
      fetch(process.env.REST_ENDPOINT_CREATE_PAYMENT, {
        method: 'POST',
        body: JSON.stringify({
          productId: '1',
        }),
      }).then((response) => {
        response.text().then((secret) => {
          this.secret = JSON.parse(secret);
        });
      });
    } else {
      new Error(`Variable REST_ENDPOINT_CREATE_PAYMENT is not defined.`);
    }
  }

  private readonly handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    const { stripe, elements } = this.props;

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make  sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmCardPayment(this.secret, {
      payment_method: {
        card: elements.getElement(CardNumberElement),
        billing_details: {
          name: 'Jenny Rosen',
        },
      },
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent?.status === 'succeeded') {
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
      }
    }
  };

  private readonly handleShippingChange = (data: ShippingState) => {};

  private readonly handleShippingValidChange = (valid: boolean) => {
    this.setState({ isShippingValid: valid });
  };

  private readonly handlePaymentValidChange = (valid: boolean) => {
    this.setState({ isPaymentValid: valid });
  };

  private get isCheckoutValid(): boolean {
    return this.state.isShippingValid && this.state.isPaymentValid;
  }

  render() {
    return createElement(StripeCheckoutI18n, {
      onGoBack: this.props.onGoBack,
      product: this.props.product,
      onShippingValidChange: this.handleShippingValidChange,
      onPaymentValidChange: this.handlePaymentValidChange,
      onShippingChange: this.handleShippingChange,
      isCheckoutValid: this.isCheckoutValid,
    });
  }
}

export const StripeCheckoutContainer = stripeElementsConsumer<
  StripeCheckoutContainerProps
>(StripeCheckoutContainerImpl);
