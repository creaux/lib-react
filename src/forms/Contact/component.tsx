import React, { FunctionComponent, useContext } from 'react';
import defaultTranslations from './en.json';
import { FormTypeContext, isNormalForm } from '../Form';
import { Conditional } from '../../components/conditional.component';
import { I18n, Translations } from '../../components/i18n.component';
import { IContact } from './types';
import { OnFieldChange, OnValidFieldChange } from '../../components/form.types';
import { Email } from '../Field/Fields/Email';
import { Phone } from '../Field/Fields/Phone';

export interface ContactTranslations extends Translations {
  CONTACT_EMAIL_LABEL: string;
  CONTACT_EMAIL_PLACEHOLDER: string;
  CONTACT_EMAIL_MESSAGE_VALID: string;
  CONTACT_EMAIL_MESSAGE_INVALID: string;
  CONTACT_EMAIL_MESSAGE_DEFAULT: string;
  CONTACT_NUMBER_LABEL: string;
  CONTACT_NUMBER_PLACEHOLDER: string;
  CONTACT_NUMBER_MESSAGE_VALID: string;
  CONTACT_NUMBER_MESSAGE_INVALID: string;
  CONTACT_NUMBER_MESSAGE_DEFAULT: string;
}

export interface ContactProps extends IContact {
  onFieldChange: OnFieldChange<keyof IContact>;
  onValidFieldChange: OnValidFieldChange<keyof IContact>;
}

export const Contact: FunctionComponent<ContactProps> = ({
  email,
  number,
  onFieldChange: handleFieldChange,
  onValidFieldChange: handleValidFieldChange,
}) => {
  const type = useContext(FormTypeContext);
  return (
    <I18n.Consumer<ContactTranslations>
      defaultTranslations={defaultTranslations}
    >
      {(translations) => (
        <fieldset name="company">
          <div className={isNormalForm(type) ? 'form-row' : 'input-group'}>
            <Conditional
              condition={isNormalForm(type)}
              when={(children) => <div className="col-6 mb-3">{children}</div>}
              otherwise={(children) => children}
            >
              <Email
                label={
                  isNormalForm(type)
                    ? translations.CONTACT_EMAIL_LABEL
                    : undefined
                }
                id={email.id}
                value={email.value}
                onChange={handleFieldChange('email')}
                placeholder={
                  isNormalForm(type)
                    ? translations.CONTACT_EMAIL_PLACEHOLDER
                    : translations.CONTACT_EMAIL_LABEL
                }
                onValidChange={handleValidFieldChange('email')}
                messages={[
                  translations.CONTACT_EMAIL_MESSAGE_VALID,
                  translations.CONTACT_EMAIL_MESSAGE_VALID,
                  translations.CONTACT_EMAIL_MESSAGE_DEFAULT,
                ]}
              />
            </Conditional>
            <Conditional
              condition={isNormalForm(type)}
              when={(children) => <div className="col-6 mb-3">{children}</div>}
              otherwise={(children) => children}
            >
              <Phone
                label={
                  isNormalForm(type)
                    ? translations.CONTACT_NUMBER_LABEL
                    : undefined
                }
                id={number.id}
                value={number.value}
                onChange={handleFieldChange('number')}
                placeholder={
                  isNormalForm(type)
                    ? translations.CONTACT_NUMBER_PLACEHOLDER
                    : translations.CONTACT_NUMBER_LABEL
                }
                onValidChange={handleValidFieldChange('number')}
                messages={[
                  translations.CONTACT_EMAIL_MESSAGE_VALID,
                  translations.CONTACT_NUMBER_MESSAGE_INVALID,
                  translations.CONTACT_NUMBER_MESSAGE_DEFAULT,
                ]}
              />
            </Conditional>
          </div>
        </fieldset>
      )}
    </I18n.Consumer>
  );
};
