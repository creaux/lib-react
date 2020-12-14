import { Translate } from '../i18n.abstract.component';
import { ProductCardProps } from '../product-card.component';
import {
  StripeCheckout,
  StripeCheckoutProps,
} from './stripe-checkout.component';
import {
  StripeCheckoutTranslation,
  StripeCheckoutTranslations,
} from './stripe-checkout.translations';
import defaultTranslations from './stripe-checkout.en.json';
import { Builder } from '../../builder';
import { FormEvent } from 'react';
import { ContactDetailsState } from '../contact-details.component';
import { ImageElement } from '../image.component';
import { IAbode } from '../../forms/Abode';
import { OnChange } from '../form.types';
import { ICheckbox } from '../../forms/Checkbox/types';
import { Step } from './store/process/process.types';

export interface StripeCheckoutI18nProps {
  product: ProductCardProps;
  onGoBack: () => void;
  onPaymentValidChange: (valid: boolean) => void;
  isCheckoutValid: boolean;
  onCheckout: (event: FormEvent<HTMLFormElement>) => void;
  isCheckoutDisabled: boolean;
  onPaymentReady: () => void;
  onContactChange: (data: ContactDetailsState) => void;
  onContactValidChange: (valid: boolean) => void;
  image: ImageElement;
  onDeliveryChange: (delivery: IAbode) => void;
  onDeliveryValidChange: (valid: boolean) => void;
  onBillingChange: (billing: IAbode) => void;
  onBillingValidChange: (valid: boolean) => void;
  isBillingSameAsDelivery: Pick<ICheckbox, 'id' | 'checked'>;
  onIsBillingChange: OnChange<HTMLInputElement>;
  onTermsChange: OnChange<HTMLInputElement>;
  onDataChange: OnChange<HTMLInputElement>;
  data: Pick<ICheckbox, 'id'>;
  terms: Pick<ICheckbox, 'id'>;
  onNextStep: (step: Step) => void;
  step: Step;
  isDeliveryStepValid: boolean;
}

export class StripeCheckoutI18n extends Translate<
  StripeCheckoutI18nProps,
  StripeCheckoutProps,
  StripeCheckoutTranslations
> {
  protected readonly Component = StripeCheckout;
  protected readonly defaultTranslations: StripeCheckoutTranslations = defaultTranslations;

  protected getProps(): StripeCheckoutProps {
    return Builder<StripeCheckoutProps>()
      .product(this.props.product)
      .onGoBack(this.props.onGoBack)
      .onPaymentValidChange(this.props.onPaymentValidChange)
      .isCheckoutValid(this.props.isCheckoutValid)
      .back(this.i18n.get(StripeCheckoutTranslation.BACK) as string)
      .paymentTitle(
        this.i18n.get(StripeCheckoutTranslation.PAYMENT_TITLE) as string
      )
      .checkoutButton(
        this.i18n.get(StripeCheckoutTranslation.CHECKOUT_BUTTON) as string
      )
      .processingPayment(
        this.i18n.get(StripeCheckoutTranslation.PROCESSING_PAYMENT) as string
      )
      .onCheckout(this.props.onCheckout)
      .isCheckoutDisabled(this.props.isCheckoutDisabled)
      .onPaymentReady(this.props.onPaymentReady)
      .onContactChange(this.props.onContactChange)
      .onContactValidChange(this.props.onContactValidChange)
      .image(this.props.image)
      .onDeliveryChange(this.props.onDeliveryChange)
      .onDeliveryValidChange(this.props.onDeliveryValidChange)
      .isBilling(
        Builder<ICheckbox>()
          .checked(this.props.isBillingSameAsDelivery.checked)
          .id(this.props.isBillingSameAsDelivery.id)
          .title(this.i18n.get(StripeCheckoutTranslation.IS_BILLING) as string)
          .build()
      )
      .onIsBillingChange(this.props.onIsBillingChange)
      .onBillingChange(this.props.onBillingChange)
      .onBillingValidChange(this.props.onBillingValidChange)
      .terms(
        Builder<ICheckbox>()
          .title(this.i18n.get(StripeCheckoutTranslation.TERMS) as string)
          .id(this.props.terms.id)
          .build()
      )
      .onTermsChange(this.props.onTermsChange)
      .data(
        Builder<ICheckbox>()
          .title(this.i18n.get(StripeCheckoutTranslation.DATA) as string)
          .id(this.props.data.id)
          .build()
      )
      .onDataChange(this.props.onDataChange)
      .deliveryHeading(
        this.i18n.get(StripeCheckoutTranslation.DELIVERY_TITLE) as string
      )
      .billingHeading(
        this.i18n.get(StripeCheckoutTranslation.BILLING_TITLE) as string
      )
      .onNextStep(this.props.onNextStep)
      .step(this.props.step)
      .isDeliveryStepValid(this.props.isDeliveryStepValid)
      .build();
  }
}
