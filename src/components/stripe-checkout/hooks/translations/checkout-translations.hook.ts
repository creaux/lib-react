import { I18n, Translations } from '../../../i18n.component';
import defaultTranslations from '../../translations/checkout.default.json';

export enum CheckoutTranslation {
  BACK = 'BACK',
}

export interface CheckoutTranslations
  extends Record<CheckoutTranslation, string>,
    Translations {}

export function useCheckoutTranslations() {
  return I18n.useTranslations<CheckoutTranslations>(defaultTranslations);
}
