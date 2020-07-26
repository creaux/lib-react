import { FormEvent } from 'react';

export enum Fields {
  TYPE_OF_DELIVERY = 'typeOfDelivery',
  INVOICING_FORNAME = 'invoicingForname',
  INVOICING_SURNAME = 'invoicingSurname',
  INVOICING_COMPANY = 'invoicingCompany',
  INVOICING_VAT = 'invoicingVat',
  INVOICING_STREET = 'invoicingStreet',
  INVOICING_STREET_NO = 'invoicingStreetNo',
  INVOICING_POSTCODE = 'invoicingPostcode',
  INVOICING_CITY = 'invoicingCity',
  INVOICING_COUNTRY = 'invoicingCoutry',
  DELIVERY_FORNAME = 'deliveryForname',
  DELIVERY_SURNAME = 'deliverySurname',
  DELIVERY_STREET = 'deliveryStreet',
  DELIVERY_STREET_NO = 'deliveryStreetNo',
  DELIVERY_POSTCODE = 'deliveryPostcode',
  DELIVERY_CITY = 'deliveryCity',
  DELIVERY_COUNTRY = 'deliveryCountry',
  TERMS = 'terms',
  PERSONAL_DATA = 'personalData',
}

export type OnChange = (
  event: FormEvent<HTMLInputElement | HTMLSelectElement>,
  value?: any,
  selectedKey?: string
) => void;
export type OnFieldChange<F extends string> = (id: F) => OnChange;

export type OnGroupChange<G extends string, F extends string> = (
  group: G
) => OnFieldChange<F>;

export type OnValidFieldChange<F extends string> = (
  id: F
) => (valid: boolean) => void;

export type OnValidGroupFieldChange<G extends string, F extends string> = (
  group: G
) => OnValidFieldChange<F>;
