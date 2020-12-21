import { I18n, Translations } from '../i18n.component';
import defaultTranslations from './billing-step.default.json';

export enum BillingTranslation {
  BILLING_HEADING = 'BILLING_HEADING',
  BILLING_DETAILS_HEADING = 'BILLING_DETAILS_HEADING',
  BILLING_IS_UNIQUE_LABEL = 'BILLING_IS_UNIQUE_LABEL',
  BILLING_PAYMENT_HEADING = 'BILLING_PAYMENT_HEADING',
  BILLING_BUTTON_PAY = 'BILLING_BUTTON_PAY',
  BILLING_BUTTON_PROCESSING = 'BILLING_BUTTON_PROCESSING',
}

export interface BillingStepTranslations
  extends Record<BillingTranslation, string>,
    Translations {}

export function useStripeBillingStepTranslations(): Map<
  keyof BillingStepTranslations,
  BillingStepTranslations[keyof BillingStepTranslations]
> {
  return I18n.useTranslations<BillingStepTranslations>(defaultTranslations);
}
