import { Translate } from './i18n.abstract.component';
import { ProductDescriptionProps } from './product-description.component';
import { ShippingState } from './shipping.state';
import { OneCheckout, OneCheckoutProps } from './one-checkout.component';
import { OneCheckoutTranslations } from './one-checkout.translations';
import defaultTranslations from './one-checkout.en.json';

export interface OneCheckoutI18nProps {
  product: ProductDescriptionProps;
  step: number;
  onGoBack: () => void;
  onStep: (step: number) => void;
  onShippingValidChange: (valid: boolean) => void;
  onShippingChange: (data: ShippingState) => void;
  isShippingValid: boolean;
}

export class OneCheckoutI18n extends Translate<
  OneCheckoutI18nProps,
  OneCheckoutProps,
  OneCheckoutTranslations
> {
  protected readonly Component = OneCheckout;
  protected readonly defaultTranslations: OneCheckoutTranslations = defaultTranslations;

  protected getProps(): OneCheckoutProps {
    return undefined;
  }
}
