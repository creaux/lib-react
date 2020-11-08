import { createElement, FunctionComponent } from 'react';
import { Builder, I18n, Translations } from '../..';
import { IPerson } from './types';
import defaultTranslations from './person.default.json';
import { Person, PersonProps } from './person.component';
import { OnFieldChange, OnValidFieldChange } from './form.types';

interface PersonTranslations extends Translations {
  FORENAME: string;
  FORENAME_PLACEHOLDER: string;
  FORENAME_MESSAGE_VALID: string;
  FORENAME_MESSAGE_INVALID: string;
  FORENAME_MESSAGE_DEFAULT: string;
  SURNAME: string;
  SURNAME_PLACEHOLDER: string;
  SURNAME_MESSAGE_VALID: string;
  SURNAME_MESSAGE_INVALID: string;
  SURNAME_MESSAGE_DEFAULT: string;
}

export interface PersonI18nProps extends IPerson {
  onFieldChange: OnFieldChange<keyof IPerson>;
  onFieldValidChange: OnValidFieldChange<keyof IPerson>;
}

export const PersonI18n: FunctionComponent<PersonI18nProps> = ({
  forname,
  surname,
  onFieldChange: handleFieldChange,
  onFieldValidChange: handleFieldValidChange,
}: PersonI18nProps) => {
  const translations = I18n.useTranslations<PersonTranslations>(
    defaultTranslations
  );
  const person = Builder<PersonProps>()
    .forname(forname)
    .surname(surname)
    .onFieldChange(handleFieldChange)
    .onFieldValidChange(handleFieldValidChange)
    .forenameLabel(translations.get('FORENAME') as string)
    .forenamePlaholder(translations.get('FORENAME_PLACEHOLDER') as string)
    .forenameMessageValid(translations.get('FORENAME_MESSAGE_VALID') as string)
    .forenameMessageInvalid(
      translations.get('FORENAME_MESSAGE_INVALID') as string
    )
    .forenameMessageDefault(
      translations.get('FORENAME_MESSAGE_DEFAULT') as string
    )
    .surnameLabel(translations.get('SURNAME') as string)
    .surnamePlaholder(translations.get('SURNAME_PLACEHOLDER') as string)
    .surnameMessageValid(translations.get('SURNAME_MESSAGE_VALID') as string)
    .surnameMessageInvalid(
      translations.get('SURNAME_MESSAGE_INVALID') as string
    )
    .surnameMessageDefault(
      translations.get('SURNAME_MESSAGE_DEFAULT') as string
    )
    .build();
  return createElement(Person, person);
};
