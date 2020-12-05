import {
  ComponentType,
  createElement,
  FormEvent,
  FunctionComponent,
  PureComponent,
} from 'react';
import { ShippingState } from '../shipping.state';
import { StripeCheckoutI18n } from './stripe-checkout.i18n';
import { CardNumberElement } from '@stripe/react-stripe-js';
import {
  ElementsContextValue,
  stripeElementsConsumer,
} from './stripe-elements-consumer.hoc';
import { Builder } from '../../builder';
import {
  StripeCheckoutBilling,
  StripeCheckoutConditions,
  StripeCheckoutDelivery,
  StripeCheckoutModel,
} from './stripe-checkout.model';
import { StripeCheckoutPay } from './stripe-checkout-pay.model';
import {
  PaymentIntent,
  PaymentMethodCreateParams,
  StripeError,
} from '@stripe/stripe-js';
import { Stripe, StripeElements } from '@stripe/stripe-js';
import stripeJs from '@stripe/stripe-js';
import { ContactDetailsState } from '../contact-details.component';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { RootState, store } from './store';
import { fetchProduct } from './store/product/product.thunks';
import { ProductState } from './store/product/product.types';
import { storeProvider } from './store/store-provider';
import { ImageElement } from '../image.component';
import { setContact, setContactValid } from './store/contact/contact.actions';
import { Contact } from './store/contact/contact.types';
import { setBilling, setBillingValid } from './store/billing/billing.actions';
import { Billing } from './store/billing/billing.types';
import {
  setDelivery,
  setDeliveryValid,
} from './store/delivery/delivery.actions';
import { Delivery } from './store/delivery/delivery.types';
import { fetchPaymentIntent } from './store/payment-intent/payment-intent.thunk';

export interface StripeCheckoutOuterProps {
  productId: string;
  onCheckout: () => void;
  onGoBack: () => void;
  onSuccess: () => void;
  onError: () => void;
  paymentEndpoint: string;
}

export interface StripeCheckoutContainerProps extends StripeCheckoutOuterProps {
  product: ProductState;
  fetchProduct: (id: string) => void;
  setContact: (contact: Contact) => void;
  setContactValid: (valid: boolean) => void;
  setBilling: (billing: Billing) => void;
  setBillingValid: (valid: boolean) => void;
  setDelivery: (delivery: Delivery) => void;
  setDeliveryValid: (valid: boolean) => void;
  fetchPaymentIntent: (checkout: StripeCheckoutPay) => void;
}

export interface StripeCheckoutContainerImplProps
  extends ElementsContextValue,
    StripeCheckoutContainerProps {}

export interface OneCheckoutState {
  isShippingValid: boolean;
  isPaymentValid: boolean;
  isPaymentProcessing: boolean;
  shipping: ShippingState;
  isPaymentReady: boolean;
  contact: ContactDetailsState;
  isContactValid: boolean;
}

class StripeCheckoutContainerImpl extends PureComponent<
  StripeCheckoutContainerImplProps,
  OneCheckoutState
> {
  constructor(props: StripeCheckoutContainerImplProps) {
    super(props);
    this.state = {
      isShippingValid: false,
      isPaymentValid: false,
      isPaymentProcessing: false,
      shipping: Builder<ShippingState>().build(),
      isPaymentReady: false,
      isContactValid: false,
      contact: Builder<ContactDetailsState>().build(),
      // TODO: Add product from stripe and consume it in render
    };
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.productId);
  }

  private get payload(): StripeCheckoutPay {
    return Builder<StripeCheckoutPay>()
      .productId(this.props.productId)
      .checkout(
        Builder<StripeCheckoutModel>()
          .forename(this.state.contact.forname.value)
          .surname(this.state.contact.surname.value)
          .email(this.state.contact.email.value)
          .phone(this.state.contact.number.value)
          .carrier('Post')
          .delivery(
            Builder<StripeCheckoutDelivery>()
              .street(this.state.shipping.delivery.street.value)
              .streetNo(this.state.shipping.delivery.streetNo.value)
              .postcode(this.state.shipping.delivery.postcode.value)
              .city(this.state.shipping.delivery.cities.value)
              .country(this.state.shipping.delivery.countries.value)
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

  private get billing(): StripeCheckoutBilling {
    return Builder<StripeCheckoutBilling>()
      .name(
        `${this.state.contact.forname.value} ${this.state.contact.surname.value}`
      )
      .phone(this.state.contact.number.value)
      .email(this.state.contact.email.value)
      .address(
        Builder<PaymentMethodCreateParams.BillingDetails.Address>()
          .city(
            this.state.shipping.invoicing.cities.value.length > 0
              ? this.state.shipping.invoicing.cities.value
              : this.state.shipping.delivery.cities.value
          )
          .country(
            this.state.shipping.invoicing.countries.value.length > 0
              ? this.state.shipping.invoicing.countries.value
              : this.state.shipping.delivery.countries.value
          )
          .postal_code(
            this.state.shipping.invoicing.postcode.value.length > 0
              ? this.state.shipping.invoicing.postcode.value
              : this.state.shipping.delivery.postcode.value
          )
          .line1(
            `${this.state.shipping.invoicing.company?.value} ${this.state.shipping.invoicing.vat?.value}`
          )
          .line2('')
          .build()
      )
      .build();
  }

  private async fetchSecretForPayment(endpoint: string) {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(this.payload),
      headers: {
        'Content-Type': 'application/json',
      },
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

    return data.client_secret;
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
        billing_details: this.billing,
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

    const secret = await this.fetchSecretForPayment(this.props.paymentEndpoint);

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
    this.props.setBilling(
      Builder<Billing>()
        .postcode(shipping.invoicing.postcode.value)
        .street(shipping.invoicing.street.value)
        .city(shipping.invoicing.cities.value)
        .country(shipping.invoicing.countries.value)
        .company(shipping.invoicing.company?.value)
        .streetNo(shipping.invoicing.streetNo.value)
        .vat(shipping.invoicing.vat?.value)
        .build()
    );
    this.props.setDelivery(
      Builder<Delivery>()
        .postcode(shipping.delivery.postcode.value)
        .street(shipping.delivery.street.value)
        .city(shipping.delivery.cities.value)
        .country(shipping.delivery.countries.value)
        .streetNo(shipping.delivery.streetNo.value)
        .build()
    );
    this.setState({ shipping });
  };

  private readonly handleShippingValidChange = (valid: boolean) => {
    this.props.setBillingValid(valid);
    this.setState({ isShippingValid: valid });
  };

  private readonly handlePaymentValidChange = (valid: boolean) => {
    this.setState({ isPaymentValid: valid });
  };

  private readonly handlePaymentReady = () => {
    this.setState({ isPaymentReady: true });
  };

  private get isCheckoutValid(): boolean {
    return (
      this.state.isShippingValid &&
      this.state.isPaymentValid &&
      this.state.isContactValid
    );
  }

  private readonly handleContactChange = (contact: ContactDetailsState) => {
    this.props.setContact(
      Builder<Contact>()
        .email(contact.email.value)
        .phone(contact.number.value)
        .forename(contact.forname.value)
        .surname(contact.surname.value)
        .build()
    );
    this.setState({ contact });
  };

  private readonly handleContactValidChange = (isContactValid: boolean) => {
    this.props.setContactValid(isContactValid);
    this.setState({ isContactValid });
  };

  render() {
    return createElement(StripeCheckoutI18n, {
      onGoBack: this.props.onGoBack,
      // FIXME
      product: this.props.product,
      onShippingValidChange: this.handleShippingValidChange,
      onPaymentValidChange: this.handlePaymentValidChange,
      onShippingChange: this.handleShippingChange,
      isCheckoutValid: this.isCheckoutValid,
      onCheckout: this.handleCheckout,
      isCheckoutDisabled:
        this.state.isPaymentProcessing || !this.state.isPaymentReady,
      onPaymentReady: this.handlePaymentReady,
      onContactChange: this.handleContactChange,
      onContactValidChange: this.handleContactValidChange,
      image: Builder<ImageElement>().src(this.props.product.images[0]).build(),
    });
  }
}

const mapStateToProps = (state: RootState) => ({
  product: state.product,
});
const mapDispatchToProps = {
  fetchProduct,
  setContact,
  setContactValid,
  setBilling,
  setBillingValid,
  setDelivery,
  setDeliveryValid,
  fetchPaymentIntent,
};
const connector = connect(mapStateToProps, mapDispatchToProps);
export const StripeCheckoutContainer = compose(
  storeProvider(store),
  connector,
  stripeElementsConsumer
)(StripeCheckoutContainerImpl) as FunctionComponent<StripeCheckoutOuterProps>;
