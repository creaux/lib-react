import { I18n, Translations } from '../../../i18n.component';
import defaultTranslations from './collect.default.json';

export enum CollectTranslation {}

export interface CollectTranslations
  extends Record<CollectTranslation, string>,
    Translations {}

export function useCollectTranslation() {
  return I18n.useTranslations<CollectTranslations>(defaultTranslations);
}
