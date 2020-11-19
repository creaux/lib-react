import { IPerson } from './types';
import defaultTranslations from './person.default.json';
import { Person, PersonProps } from './person.component';
import { OnFieldChange, OnValidFieldChange } from './form.types';
import { Translate } from './i18n.abstract.component';
import { Builder } from '../builder';
import { PersonTranslation, PersonTranslations } from './person.translations';

export interface PersonI18nProps extends IPerson {
  onFieldChange: OnFieldChange<keyof IPerson>;
  onFieldValidChange: OnValidFieldChange<keyof IPerson>;
  disabled: boolean;
}

export class PersonI18n extends Translate<
  PersonI18nProps,
  PersonProps,
  PersonTranslations
> {
  protected defaultTranslations = defaultTranslations;
  protected readonly Component = Person;

  protected getProps(): PersonProps {
    return Builder<PersonProps>()
      .forname(this.props.forname)
      .surname(this.props.surname)
      .onFieldChange(this.props.onFieldChange)
      .onFieldValidChange(this.props.onFieldValidChange)
      .forenameLabel(this.i18n.get(PersonTranslation.FORENAME) as string)
      .forenamePlaceholder(
        this.i18n.get(PersonTranslation.FORENAME_PLACEHOLDER) as string
      )
      .forenameMessageValid(
        this.i18n.get(PersonTranslation.FORENAME_MESSAGE_VALID) as string
      )
      .forenameMessageInvalid(
        this.i18n.get(PersonTranslation.FORENAME_MESSAGE_INVALID) as string
      )
      .forenameMessageDefault(
        this.i18n.get(PersonTranslation.FORENAME_MESSAGE_DEFAULT) as string
      )
      .surnameLabel(this.i18n.get(PersonTranslation.SURNAME) as string)
      .surnamePlaceholder(
        this.i18n.get(PersonTranslation.SURNAME_PLACEHOLDER) as string
      )
      .surnameMessageValid(
        this.i18n.get(PersonTranslation.SURNAME_MESSAGE_VALID) as string
      )
      .surnameMessageInvalid(
        this.i18n.get(PersonTranslation.SURNAME_MESSAGE_INVALID) as string
      )
      .surnameMessageDefault(
        this.i18n.get(PersonTranslation.SURNAME_MESSAGE_DEFAULT) as string
      )
      .disabled(this.props.disabled)
      .build();
  }
}
