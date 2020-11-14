import { Translate } from './i18n.abstract.component';
import { ProductDescriptionProps } from './product-description.component';
import { ShippingState } from './shipping.state';
import { StripeCheckout, OneCheckoutProps } from './stripe-checkout.component';
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
  onShippingChange: (data: ShippingState) => void;
  isShippingValid: boolean;
}

export class StripeCheckoutI18n extends Translate<
  StripeCheckoutI18nProps,
  OneCheckoutProps,
  StripeCheckoutTranslations
> {
  protected readonly Component = StripeCheckout;
  protected readonly defaultTranslations: StripeCheckoutTranslations = defaultTranslations;

  protected getProps(): OneCheckoutProps {
    return Builder<OneCheckoutProps>()
      .product(this.props.product)
      .onGoBack(this.props.onGoBack)
      .onShippingValidChange(this.props.onShippingValidChange)
      .onShippingChange(this.props.onShippingChange)
      .isShippingValid(this.props.isShippingValid)
      .back(this.i18n.get(StripeCheckoutTranslation.BACK) as string)
      .build();
  }
}
