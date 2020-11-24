import { Translations } from './i18n.component';

export enum ModalTranslation {
  CONFIRM = 'CONFIRM',
  CANCEL = 'CANCEL',
  TITLE = 'TITLE',
}

export interface ModalTranslations extends Translations {
  [ModalTranslation.CONFIRM]: string;
  [ModalTranslation.CANCEL]: string;
  [ModalTranslation.TITLE]: string;
}
