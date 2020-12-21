import { I18n, Translations } from '../i18n.component';
import defaultTranslations from './delivery.default.json';

export enum DeliveryTranslation {
  DELIVERY_HEADING = 'DELIVERY_HEADING',
  DELIVERY_CONTACT_DETAILS_HEADING = 'DELIVERY_CONTACT_DETAILS_HEADING',
  DELIVERY_DETAILS_HEADING = 'DELIVERY_DETAILS_HEADING',
  DELIVERY_NEXT_STEP_LABEL = 'DELIVERY_NEXT_STEP_LABEL',
  DELIVERY_NEXT_STEP_DISABLED_LABEL = 'DELIVERY_NEXT_STEP_DISABLED_LABEL',
  DELIVERY_TERMS_LABEL = 'DELIVERY_TERMS_LABEL',
  DELIVERY_DATA_LABEL = 'DELIVERY_DATA_LABEL',
}

export interface DeliveryTranslations
  extends Record<DeliveryTranslation, string>,
    Translations {}

export function useDeliveryTranslations() {
  return I18n.useTranslations<DeliveryTranslations>(defaultTranslations);
}
