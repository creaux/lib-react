import { Translate } from '../i18n.abstract.component';
import { ProductCardProps } from '../product-card.component';
import { ShippingState } from '../shipping.state';
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

export interface StripeCheckoutI18nProps {
  product: ProductCardProps;
  onGoBack: () => void;
  onShippingValidChange: (valid: boolean) => void;
  onPaymentValidChange: (valid: boolean) => void;
  onShippingChange: (data: ShippingState) => void;
  isCheckoutValid: boolean;
  onCheckout: (event: FormEvent<HTMLFormElement>) => void;
  isCheckoutDisabled: boolean;
  onPaymentReady: () => void;
  onContactChange: (data: ContactDetailsState) => void;
  onContactValidChange: (valid: boolean) => void;
  image: ImageElement;
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
      .onShippingValidChange(this.props.onShippingValidChange)
      .onPaymentValidChange(this.props.onPaymentValidChange)
      .isCheckoutValid(this.props.isCheckoutValid)
      .onShippingChange(this.props.onShippingChange)
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
      .build();
  }
}
