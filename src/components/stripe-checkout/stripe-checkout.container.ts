import {
  createElement,
  FormEvent,
  FunctionComponent,
  PureComponent,
} from 'react';
import { StripeCheckoutI18n } from './stripe-checkout.i18n';
import {
  ElementsContextValue,
  stripeElementsConsumer,
} from './stripe-elements-consumer.hoc';
import { Builder } from '../../builder';
import { Stripe, StripeElements } from '@stripe/stripe-js';
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
import {
  setBilling,
  setBillingSameAsDelivery,
  setBillingValid,
} from './store/billing/billing.actions';
import { Billing } from './store/billing/billing.types';
import {
  setDelivery,
  setDeliveryValid,
} from './store/delivery/delivery.actions';
import { Delivery } from './store/delivery/delivery.types';
import {
  fetchPaymentIntent,
  postPaymentIntent,
} from './store/payment-intent/payment-intent.thunk';
import { setData, setTerms } from './store/conditions/conditions.actions';
import { IAbode } from '../../forms/Abode';
import { ICheckbox } from '../../forms/Checkbox/types';
import { OnChange } from '../form.types';
import {
  setPaymentProcessing,
  setPaymentReady,
  setPaymentValid,
} from './store/payment-intent/payment-intent.actions';
import { setStep } from './store/process/process.actions';
import { Step } from './store/process/process.types';

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
  fetchPaymentIntent: () => void;
  isValid: boolean;
  setTerms: (terms: boolean) => void;
  setData: (data: boolean) => void;
  setProductID: (id: string) => void;
  postPaymentIntent: (
    stripe: Stripe | null,
    elements: StripeElements | null,
    onError: () => void,
    onSuccess: () => void
  ) => void;
  billingSameAsDelivery: boolean;
  setBillingSameAsDelivery: (billingSameAsDelivery: boolean) => void;
  setPaymentReady: (ready: boolean) => void;
  isPaymentReady: boolean;
  setPaymentValid: (valid: boolean) => void;
  isPaymentValid: boolean;
  setPaymentProcessing: (processing: boolean) => void;
  isPaymentProcessing: boolean;
  setStep: (step: Step) => void;
  step: Step;
  isDeliveryStepValid: boolean;
}

export interface StripeCheckoutContainerImplProps
  extends ElementsContextValue,
    StripeCheckoutContainerProps {}

class StripeCheckoutContainerImpl extends PureComponent<
  StripeCheckoutContainerImplProps
> {
  private readonly constants = {
    terms: Builder<Pick<ICheckbox, 'id'>>().id('terms').build(),
    data: Builder<Pick<ICheckbox, 'id'>>().id('data').build(),
  };

  componentDidMount() {
    this.props.fetchProduct(this.props.productId);
  }

  private set isPaymentProcessing(isPaymentProcessing: boolean) {
    this.props.setPaymentProcessing(isPaymentProcessing);
  }

  private readonly handleCheckout = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    this.isPaymentProcessing = true;

    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    // Wait since intent is fetched
    await this.props.fetchPaymentIntent();
    // and then post
    const { stripe, elements } = this.props;
    this.props.postPaymentIntent(
      stripe,
      elements,
      this.props.onError,
      this.props.onSuccess
    );
  };

  private readonly handleDeliveryChange = (delivery: IAbode) => {
    this.props.setDelivery(
      Builder<Delivery>()
        .postcode(delivery.postcode.value)
        .street(delivery.street.value)
        .city(delivery.cities.value)
        .country(delivery.countries.value)
        .streetNo(delivery.streetNo.value)
        .build()
    );
  };

  private readonly handleDeliveryValidChange = (valid: boolean) => {
    this.props.setDeliveryValid(valid);
  };

  private readonly handleBillingChange = (billing: IAbode) => {
    this.props.setBilling(
      Builder<Billing>()
        .postcode(billing.postcode.value)
        .street(billing.street.value)
        .city(billing.cities.value)
        .country(billing.countries.value)
        .streetNo(billing.streetNo.value)
        .company(billing.company?.value)
        .vat(billing.vat?.value)
        .build()
    );
  };

  private readonly handleIsBillingChange: OnChange<HTMLInputElement> = (
    e: FormEvent<HTMLInputElement>
  ) => {
    this.props.setBillingSameAsDelivery(e.currentTarget.checked);
  };

  private readonly handleBillingValidChange = (valid: boolean) => {
    this.props.setBillingValid(valid);
  };

  private readonly handlePaymentValidChange = (valid: boolean) => {
    this.props.setPaymentValid(valid);
  };

  private readonly handlePaymentReady = () => {
    this.props.setPaymentReady(true);
  };

  private readonly handleContactChange = (contact: ContactDetailsState) => {
    this.props.setContact(
      Builder<Contact>()
        .email(contact.email.value)
        .phone(contact.number.value)
        .forename(contact.forname.value)
        .surname(contact.surname.value)
        .build()
    );
  };

  private readonly handleContactValidChange = (isContactValid: boolean) => {
    this.props.setContactValid(isContactValid);
  };

  private readonly handleTermsChange: OnChange<HTMLInputElement> = (
    e: FormEvent<HTMLInputElement>
  ) => {
    const checked = e.currentTarget.checked;
    this.props.setTerms(checked);
  };

  private readonly handleDataChange: OnChange<HTMLInputElement> = (
    e: FormEvent<HTMLInputElement>
  ) => {
    const checked = e.currentTarget.checked;
    this.props.setData(checked);
  };

  private readonly handleNextStep = (step: Step) => {
    this.props.setStep(step);
  };

  render() {
    return createElement(StripeCheckoutI18n, {
      onGoBack: this.props.onGoBack,
      product: this.props.product,
      onPaymentValidChange: this.handlePaymentValidChange,
      isCheckoutValid: this.props.isValid && this.props.isPaymentValid,
      onCheckout: this.handleCheckout,
      isCheckoutDisabled:
        this.props.isPaymentProcessing || !this.props.isPaymentReady,
      onPaymentReady: this.handlePaymentReady,
      onContactChange: this.handleContactChange,
      onContactValidChange: this.handleContactValidChange,
      image: Builder<ImageElement>().src(this.props.product.images[0]).build(),
      onDeliveryChange: this.handleDeliveryChange,
      onDeliveryValidChange: this.handleDeliveryValidChange,
      onBillingChange: this.handleBillingChange,
      onBillingValidChange: this.handleBillingValidChange,
      onIsBillingChange: this.handleIsBillingChange,
      isBillingSameAsDelivery: Builder<Pick<ICheckbox, 'id' | 'checked'>>()
        .id('isBillingSameAsDelivery')
        .checked(this.props.billingSameAsDelivery)
        .build(),
      onTermsChange: this.handleTermsChange,
      onDataChange: this.handleDataChange,
      data: this.constants.data,
      terms: this.constants.terms,
      onNextStep: this.handleNextStep,
      step: this.props.step,
      isDeliveryStepValid: this.props.isDeliveryStepValid,
    });
  }
}

const mapStateToProps = (state: RootState) => ({
  product: state.product,
  billingSameAsDelivery: state.billing.sameAsDelivery,
  isDeliveryStepValid:
    state.contact.valid &&
    state.delivery.valid &&
    state.conditions.data &&
    state.conditions.terms,
  isValid: state.billing.sameAsDelivery ? true : state.billing.valid,
  isPaymentReady: state.paymentIntent.ready,
  isPaymentValid: state.paymentIntent.valid,
  isPaymentProcessing: state.paymentIntent.processing,
  step: state.process.step,
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
  setData,
  setTerms,
  postPaymentIntent,
  setBillingSameAsDelivery,
  setPaymentReady,
  setPaymentValid,
  setPaymentProcessing,
  setStep,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export const StripeCheckoutContainer = compose(
  storeProvider(store),
  connector,
  stripeElementsConsumer
)(StripeCheckoutContainerImpl) as FunctionComponent<StripeCheckoutOuterProps>;
