import React, { FunctionComponent, useContext } from 'react';
import { Text } from '../Field';
import { OnFieldChange, OnValidFieldChange } from '../../components/form.types';
import { IPerson, PersonBuilder } from './types';
import { I18n } from '../../components/i18n.component';
import { Translations } from '../../components/i18n.component';
import { Conditional } from '../../components/conditional.component';
import { FormTypeContext, isNormalForm } from '../Form';
import defaultTranslations from './en.json';

export class PersonPropsBuilder extends PersonBuilder {
  private onFieldChange!: OnFieldChange<keyof IPerson>;
  private onFieldValidChange!: OnValidFieldChange<keyof IPerson>;

  withOnFieldChange(onFieldChange: OnFieldChange<keyof IPerson>) {
    this.onFieldChange = onFieldChange;
  }

  withOnValidFieldChange(
    onFieldValidChange: OnValidFieldChange<keyof IPerson>
  ) {
    this.onFieldValidChange = onFieldValidChange;
  }

  build(): PersonProps {
    return {
      ...super.build(),
      onFieldChange: this.onFieldChange,
      onFieldValidChange: this.onFieldValidChange,
    };
  }
}

export interface PersonProps extends IPerson {
  onFieldChange: OnFieldChange<keyof IPerson>;
  onFieldValidChange: OnValidFieldChange<keyof IPerson>;
}

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

export const Person: FunctionComponent<PersonProps> = ({
  forname,
  surname,
  onFieldChange: handleFieldChange,
  onFieldValidChange: handleFieldValidChange,
}) => {
  const type = useContext(FormTypeContext);

  return (
    <I18n.Consumer<PersonTranslations>
      defaultTranslations={defaultTranslations}
    >
      {(translations) => (
        <fieldset name="person">
          <div className={isNormalForm(type) ? 'form-row' : 'input-group'}>
            <Conditional
              condition={isNormalForm(type)}
              when={(children) => <div className="col-6 mb-3">{children}</div>}
              otherwise={(children) => children}
            >
              <Text
                label={isNormalForm(type) ? translations.FORENAME : undefined}
                id={forname.id}
                value={forname.value}
                onChange={handleFieldChange('forname')}
                onValidChange={handleFieldValidChange('forname')}
                messages={[
                  translations.FORENAME_MESSAGE_VALID,
                  translations.FORENAME_MESSAGE_INVALID,
                  translations.FORENAME_MESSAGE_DEFAULT,
                ]}
                placeholder={translations.FORENAME_PLACEHOLDER}
              />
            </Conditional>
            <Conditional
              condition={isNormalForm(type)}
              when={(children) => <div className="col-6 mb-3">{children}</div>}
              otherwise={(children) => children}
            >
              <Text
                label={isNormalForm(type) ? translations.SURNAME : undefined}
                id={surname.id}
                value={surname.value}
                onChange={handleFieldChange('surname')}
                onValidChange={handleFieldValidChange('surname')}
                messages={[
                  translations.SURNAME_MESSAGE_VALID,
                  translations.SURNAME_MESSAGE_INVALID,
                  translations.SURNAME_MESSAGE_DEFAULT,
                ]}
                placeholder={translations.SURNAME_PLACEHOLDER}
              />
            </Conditional>
          </div>
        </fieldset>
      )}
    </I18n.Consumer>
  );
};
