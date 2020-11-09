import { Translations } from '../index';

export enum CompanyTranslation {
  COMPANY = 'COMPANY',
  COMPANY_PLACEHOLDER = 'COMPANY_PLACEHOLDER',
  COMPANY_MESSAGE_VALID = 'COMPANY_MESSAGE_VALID',
  COMPANY_MESSAGE_INVALID = 'COMPANY_MESSAGE_INVALID',
  COMPANY_MESSAGE_DEFAULT = 'COMPANY_MESSAGE_DEFAULT',
  VAT = 'VAT',
  VAT_PLACEHOLDER = 'VAT_PLACEHOLDER',
  VAT_MESSAGE_VALID = 'VAT_MESSAGE_VALID',
  VAT_MESSAGE_INVALID = 'VAT_MESSAGE_INVALID',
  VAT_MESSAGE_DEFAULT = 'VAT_MESSAGE_DEFAULT',
}

export interface CompanyTranslations extends Translations {
  [CompanyTranslation.COMPANY]: string;
  [CompanyTranslation.COMPANY_PLACEHOLDER]: string;
  [CompanyTranslation.COMPANY_MESSAGE_VALID]: string;
  [CompanyTranslation.COMPANY_MESSAGE_INVALID]: string;
  [CompanyTranslation.COMPANY_MESSAGE_DEFAULT]: string;
  [CompanyTranslation.VAT]: string;
  [CompanyTranslation.VAT_PLACEHOLDER]: string;
  [CompanyTranslation.VAT_MESSAGE_VALID]: string;
  [CompanyTranslation.VAT_MESSAGE_INVALID]: string;
  [CompanyTranslation.VAT_MESSAGE_DEFAULT]: string;
}
