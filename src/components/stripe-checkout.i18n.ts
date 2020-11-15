import { Translate } from './i18n.abstract.component';
import { ProductDescriptionProps } from './product-description.component';
import { ShippingState } from './shipping.state';
import {
  StripeCheckout,
  StripeCheckoutProps,
} from './stripe-checkout.component';
import {
  StripeCheckoutTranslation,
  StripeCheckoutTranslations,
} from './stripe-checkout.translations';
import defaultTranslations from './stripe-checkout.en.json';
import { Builder } from '../builder';

export interface StripeCheckoutI18nProps {
  product: ProductDescriptionProps;
  onGoBack: () => void;
  onShippingValidChange: (valid: boolean) => void;
  onPaymentValidChange: (valid: boolean) => void;
  onShippingChange: (data: ShippingState) => void;
  isCheckoutValid: boolean;
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
      .build();
  }
}
