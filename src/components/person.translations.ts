import { Translations } from './i18n.component';

export enum PersonTranslation {
  FORENAME = 'FORENAME',
  FORENAME_PLACEHOLDER = 'FORENAME_PLACEHOLDER',
  FORENAME_MESSAGE_VALID = 'FORENAME_MESSAGE_VALID',
  FORENAME_MESSAGE_INVALID = 'FORENAME_MESSAGE_INVALID',
  FORENAME_MESSAGE_DEFAULT = 'FORENAME_MESSAGE_DEFAULT',
  SURNAME = 'SURNAME',
  SURNAME_PLACEHOLDER = 'SURNAME_PLACEHOLDER',
  SURNAME_MESSAGE_VALID = 'SURNAME_MESSAGE_VALID',
  SURNAME_MESSAGE_INVALID = 'SURNAME_MESSAGE_INVALID',
  SURNAME_MESSAGE_DEFAULT = 'SURNAME_MESSAGE_DEFAULT',
}

export interface PersonTranslations extends Translations {
  [PersonTranslation.FORENAME]: string;
  [PersonTranslation.FORENAME_PLACEHOLDER]: string;
  [PersonTranslation.FORENAME_MESSAGE_VALID]: string;
  [PersonTranslation.FORENAME_MESSAGE_INVALID]: string;
  [PersonTranslation.FORENAME_MESSAGE_DEFAULT]: string;
  [PersonTranslation.SURNAME]: string;
  [PersonTranslation.SURNAME_PLACEHOLDER]: string;
  [PersonTranslation.SURNAME_MESSAGE_VALID]: string;
  [PersonTranslation.SURNAME_MESSAGE_INVALID]: string;
  [PersonTranslation.SURNAME_MESSAGE_DEFAULT]: string;
}
