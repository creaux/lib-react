import { Translations } from './i18n.component';

export enum StripeTranslation {
  STRIPE_NUMBER_PLACEHOLDER = 'STRIPE_NUMBER_PLACEHOLDER',
  STRIPE_EXPIRY_PLACEHOLDER = 'STRIPE_EXPIRY_PLACEHOLDER',
  STRIPE_CVC_PLACEHOLDER = 'STRIPE_CVC_PLACEHOLDER',
}

export interface StripeTranslations extends Translations {
  [StripeTranslation.STRIPE_NUMBER_PLACEHOLDER]: string;
  [StripeTranslation.STRIPE_EXPIRY_PLACEHOLDER]: string;
  [StripeTranslation.STRIPE_CVC_PLACEHOLDER]: string;
}
