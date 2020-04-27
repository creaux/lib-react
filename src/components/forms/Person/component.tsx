import React, { FunctionComponent, useContext } from 'react';
import { Text } from '../Input';
import { OnFieldChange, OnValidFieldChange } from '../../types/form';
import { IPerson } from './types';
import { I18nConsumer } from '../../I18n';
import { Translations } from '../../I18n/component';
import { Conditional } from '../../Conditional/component';
import { FormTypeContext, isNormalForm } from '../Form';

export interface PersonProps extends IPerson {
  onFieldChange: OnFieldChange<keyof IPerson>;
  onFieldValidChange: OnValidFieldChange<keyof IPerson>;
}

const defaultTranslations: PersonTranslations = {
  FORENAME: 'Forename',
  FORENAME_PLACEHOLDER: 'Karel',
  FORENAME_MESSAGE_VALID: 'Forename is valid',
  FORENAME_MESSAGE_INVALID: 'Forename is not valid',
  SURNAME: 'Surname',
  SURNAME_PLACEHOLDER: 'Vomacka',
  SURNAME_MESSAGE_VALID: 'Forename is valid',
  SURNAME_MESSAGE_INVALID: 'Forename is not valid',
};

interface PersonTranslations extends Translations {
  FORENAME: string;
  FORENAME_PLACEHOLDER: string;
  FORENAME_MESSAGE_VALID: string;
  FORENAME_MESSAGE_INVALID: string;
  SURNAME: string;
  SURNAME_PLACEHOLDER: string;
  SURNAME_MESSAGE_VALID: string;
  SURNAME_MESSAGE_INVALID: string;
}

export const Person: FunctionComponent<PersonProps> = ({
  forname,
  surname,
  onFieldChange: handleFieldChange,
  onFieldValidChange: handleFieldValidChange,
}) => {
  const type = useContext(FormTypeContext);

  return <I18nConsumer<PersonTranslations> defaultTranslations={defaultTranslations}>
    {translations => (
      <fieldset name="person">
        <div className={isNormalForm(type) ? 'form-row' : 'input-group'}>
          <Conditional
            condition={isNormalForm(type)}
            when={children => <div className="col-6 mb-3">{children}</div>}
            otherwise={children => <div className="input-grow">{children}</div>}>
            <Text
              label={isNormalForm(type) ? translations.FORENAME : undefined}
              id={forname.id}
              value={forname.value}
              onChange={handleFieldChange('forname')}
              onValidChange={handleFieldValidChange('forname')}
              messages={{
                valid: translations.FORENAME_MESSAGE_VALID,
                invalid: translations.FORENAME_MESSAGE_INVALID
              }}
              placeholder={translations.FORENAME_PLACEHOLDER}
            />
          </Conditional>
          <Conditional
            condition={isNormalForm(type)}
            when={children => <div className="col-6 mb-3">{children}</div>}
            otherwise={children => <div className="input-grow">{children}</div>}>
            <Text
              label={isNormalForm(type) ? translations.SURNAME : undefined}
              id={surname.id}
              value={surname.value}
              onChange={handleFieldChange('surname')}
              onValidChange={handleFieldValidChange('surname')}
              messages={{
                valid: translations.SURNAME_MESSAGE_VALID,
                invalid: translations.SURNAME_MESSAGE_INVALID
              }}
              placeholder={translations.SURNAME_PLACEHOLDER}
            />
          </Conditional>
        </div>
      </fieldset>
    )}
  </I18nConsumer>
};
