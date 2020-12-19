import { I18n, Translations } from '../../../i18n.component';
import defaultTranslations from '../../translations/stripe.default.json';

export enum StripeTranslation {
  STRIPE_NUMBER_PLACEHOLDER = 'STRIPE_NUMBER_PLACEHOLDER',
  STRIPE_EXPIRY_PLACEHOLDER = 'STRIPE_EXPIRY_PLACEHOLDER',
  STRIPE_CVC_PLACEHOLDER = 'STRIPE_CVC_PLACEHOLDER',
}

export interface StripeTranslations
  extends Record<StripeTranslation, string>,
    Translations {}

export function useStripeTranslations() {
  return I18n.useTranslations<StripeTranslations>(defaultTranslations);
}
