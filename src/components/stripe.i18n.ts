import { Translate } from './i18n.abstract.component';
import { Stripe, StripeProps } from './stripe.component';
import { StripeTranslation, StripeTranslations } from './stripe.translations';
import { ComponentType, FormEvent } from 'react';
import defaultTranslations from './stripe.default.json';
import { Builder } from '../builder';

export interface StripeI18nProps {}

export class StripeI18n extends Translate<
  StripeI18nProps,
  StripeProps,
  StripeTranslations
> {
  protected readonly Component: ComponentType<StripeProps> = Stripe;
  protected readonly defaultTranslations: StripeTranslations = defaultTranslations;

  protected getProps(): StripeProps {
    return Builder<StripeProps>()
      .cardNumberPlaceholder(
        this.i18n.get(StripeTranslation.STRIPE_NUMBER_PLACEHOLDER) as string
      )
      .cardExpiryPlaceholder(
        this.i18n.get(StripeTranslation.STRIPE_EXPIRY_PLACEHOLDER) as string
      )
      .cardCvcPlaceholder(
        this.i18n.get(StripeTranslation.STRIPE_CVC_PLACEHOLDER) as string
      )
      .build();
  }
}
