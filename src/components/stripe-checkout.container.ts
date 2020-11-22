import { createElement, FormEvent, PureComponent } from 'react';
import { ShippingState } from './shipping.state';
import { StripeCheckoutI18n } from './stripe-checkout.i18n';
import { CardNumberElement } from '@stripe/react-stripe-js';
import {
  ElementsContextValue,
  stripeElementsConsumer,
} from './stripe-elements-consumer.hoc';
import { Product } from './product';
import { Builder } from '../builder';
import {
  StripeCheckoutBilling,
  StripeCheckoutConditions,
  StripeCheckoutDelivery,
  StripeCheckoutModel,
} from './stripe-checkout.model';
import { StripeCheckoutPay } from './stripe-checkout-pay.model';
import { PaymentIntent, StripeError } from '@stripe/stripe-js';
import { Stripe, StripeElements } from '@stripe/stripe-js';
import stripeJs from '@stripe/stripe-js';

export interface StripeCheckoutContainerProps extends ElementsContextValue {
  product: Product;
  onCheckout: () => void;
  onGoBack: () => void;
  onSuccess: () => void;
  onError: () => void;
}

export interface OneCheckoutState {
  isShippingValid: boolean;
  isPaymentValid: boolean;
  isPaymentProcessing: boolean;
  shipping: ShippingState;
  isPaymentReady: boolean;
}

class StripeCheckoutContainerImpl extends PureComponent<
  StripeCheckoutContainerProps,
  OneCheckoutState
> {
  constructor(props: StripeCheckoutContainerProps) {
    super(props);
    this.state = {
      isShippingValid: false,
      isPaymentValid: false,
      isPaymentProcessing: false,
      shipping: Builder<ShippingState>().build(),
      isPaymentReady: false,
    };

    if (!process.env.REST_ENDPOINT_CREATE_PAYMENT) {
      new Error(`Variable REST_ENDPOINT_CREATE_PAYMENT is not defined.`);
    }
  }

  private get payload(): StripeCheckoutPay {
    return Builder<StripeCheckoutPay>()
      .productId(this.props.product.id)
      .checkout(
        Builder<StripeCheckoutModel>()
          .delivery(
            Builder<StripeCheckoutDelivery>()
              .forename(this.state.shipping.delivery.forname.value)
              .surname(this.state.shipping.delivery.surname.value)
              .street(this.state.shipping.delivery.street.value)
              .streetNo(this.state.shipping.delivery.streetNo.value)
              .postcode(this.state.shipping.delivery.postcode.value)
              .city(this.state.shipping.delivery.cities.value)
              .country(this.state.shipping.delivery.countries.value)
              .build()
          )
          .billing(
            Builder<StripeCheckoutBilling>()
              .forename(this.state.shipping.invoicing.forname.value)
              .surname(this.state.shipping.invoicing.surname.value)
              .street(this.state.shipping.invoicing.street.value)
              .streetNo(this.state.shipping.invoicing.streetNo.value)
              .postcode(this.state.shipping.invoicing.postcode.value)
              .city(this.state.shipping.invoicing.cities.value)
              .country(this.state.shipping.invoicing.countries.value)
              .company(this.state.shipping.invoicing.company?.value as string)
              .vat(this.state.shipping.invoicing.vat?.value as string)
              .build()
          )
          .conditions(
            Builder<StripeCheckoutConditions>()
              .terms(this.state.shipping.terms.checked)
              .data(this.state.shipping.data.checked)
              .build()
          )
          .build()
      )
      .build();
  }

  private async fetchSecretForPayment(endpoint: string) {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(this.payload),
    });
    const data = await response.json();

    if (response.status === 200) {
      return data.client_secret;
    }

    if (response.status === 400) {
      throw new Error(JSON.stringify(data.validationErrors));
    }

    if (response.status === 404) {
      throw new Error(data.dataError);
    }
  }

  private set isPaymentProcessing(isPaymentProcessing: boolean) {
    this.setState({ isPaymentProcessing });
  }

  private async processPaymentWithSecret(
    secret: string
  ): Promise<
    { paymentIntent?: PaymentIntent; error?: StripeError } | undefined
  > {
    const { stripe, elements } = this.props;

    // stripe and elements suppose to be in this state ready
    // as for isPaymentReady disabling form
    return await (stripe as Stripe).confirmCardPayment(secret as string, {
      payment_method: {
        card: (elements as StripeElements).getElement(
          CardNumberElement
        ) as stripeJs.StripeCardNumberElement,
        // TODO
        billing_details: {
          name: 'Jenny Rosen',
        },
      },
    });
  }

  private readonly handleCheckout = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    this.isPaymentProcessing = true;

    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    const secret = await this.fetchSecretForPayment(
      process.env.REST_ENDPOINT_CREATE_PAYMENT as string
    );

    if (!secret) {
      return;
    }

    const result = await this.processPaymentWithSecret(secret);

    if (!result) {
      return;
    }

    if (result.error) {
      this.props.onError();
    } else {
      if (result.paymentIntent?.status === 'succeeded') {
        this.props.onSuccess();
      }
    }
  };

  private readonly handleShippingChange = (shipping: ShippingState) => {
    this.setState({ shipping });
  };

  private readonly handleShippingValidChange = (valid: boolean) => {
    this.setState({ isShippingValid: valid });
  };

  private readonly handlePaymentValidChange = (valid: boolean) => {
    this.setState({ isPaymentValid: valid });
  };

  private readonly handlePaymentReady = () => {
    this.setState({ isPaymentReady: true });
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
      onCheckout: this.handleCheckout,
      isCheckoutDisabled:
        this.state.isPaymentProcessing || !this.state.isPaymentReady,
      onPaymentReady: this.handlePaymentReady,
    });
  }
}

export const StripeCheckoutContainer = stripeElementsConsumer<
  StripeCheckoutContainerProps
>(StripeCheckoutContainerImpl);
