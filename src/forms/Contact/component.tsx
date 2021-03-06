import React, { FunctionComponent, useContext } from 'react';
import defaultTranslations from './en.json';
import { FormTypeContext, isNormalFloatingForm, isNormalForm } from '../Form';
import { Conditional } from '../../components/utility/conditional.component';
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
  disabled: boolean;
}

export const Contact: FunctionComponent<ContactProps> = ({
  email,
  number,
  onFieldChange: handleFieldChange,
  onValidFieldChange: handleValidFieldChange,
  disabled,
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
                  isNormalFloatingForm(type)
                    ? translations.CONTACT_EMAIL_LABEL
                    : undefined
                }
                id={email.id}
                value={email.value}
                onChange={handleFieldChange('email')}
                placeholder={
                  isNormalFloatingForm(type)
                    ? translations.CONTACT_EMAIL_PLACEHOLDER
                    : translations.CONTACT_EMAIL_LABEL
                }
                onValidChange={handleValidFieldChange('email')}
                messages={[
                  translations.CONTACT_EMAIL_MESSAGE_VALID,
                  translations.CONTACT_EMAIL_MESSAGE_VALID,
                  translations.CONTACT_EMAIL_MESSAGE_DEFAULT,
                ]}
                disabled={disabled}
              />
            </Conditional>
            <Conditional
              condition={isNormalForm(type)}
              when={(children) => <div className="col-6 mb-3">{children}</div>}
              otherwise={(children) => children}
            >
              <Phone
                label={
                  isNormalFloatingForm(type)
                    ? translations.CONTACT_NUMBER_LABEL
                    : undefined
                }
                id={number.id}
                value={number.value}
                onChange={handleFieldChange('number')}
                placeholder={
                  isNormalFloatingForm(type)
                    ? translations.CONTACT_NUMBER_PLACEHOLDER
                    : translations.CONTACT_NUMBER_LABEL
                }
                onValidChange={handleValidFieldChange('number')}
                messages={[
                  translations.CONTACT_EMAIL_MESSAGE_VALID,
                  translations.CONTACT_NUMBER_MESSAGE_INVALID,
                  translations.CONTACT_NUMBER_MESSAGE_DEFAULT,
                ]}
                disabled={disabled}
              />
            </Conditional>
          </div>
        </fieldset>
      )}
    </I18n.Consumer>
  );
};
