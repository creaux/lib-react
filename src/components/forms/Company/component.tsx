import React, { FunctionComponent, useContext } from 'react';
import { Text } from '../Input';
import { OnFieldChange, OnValidFieldChange } from '../../types/form';
import { ICompany } from './types';
import { I18nConsumer } from '../../I18n/component';
import defaultTranslations from './en.json';
import { Conditional } from '../../Conditional/component';
import { FormContext } from '../../../../build/components/forms/Form/component';
import { FormTypeContext, isNormalForm } from '../Form/component';

export interface CompanyProps extends ICompany {
  onFieldChange: OnFieldChange<keyof ICompany>;
  onValidFieldChange: OnValidFieldChange<keyof ICompany>;
}

export interface CompanyTranslations {
  COMPANY: string;
  COMPANY_PLACEHOLDER: string;
  COMPANY_MESSAGE_VALID: string;
  COMPANY_MESSAGE_INVALID: string;
  VAT: string;
  VAT_PLACEHOLDER: string;
  VAT_MESSAGE_VALID: string;
  VAT_MESSAGE_INVALID: string;
}

export const Company: FunctionComponent<CompanyProps> = ({
  company,
  vat,
  onFieldChange: handleFieldChange,
  onValidFieldChange: handleValidFieldChange
}) => {
  const type = useContext(FormTypeContext);
  return <I18nConsumer<CompanyTranslations> defaultTranslations={defaultTranslations}>
    {translations => (
      <fieldset name="company">
        <div className={isNormalForm(type) ? "form-row" : 'input-group'}>
          <Conditional condition={isNormalForm(type)}
                       when={children => <div className="col-6 mb-3">{children}</div>}
                       otherwise={children => <div className="input-grow">{children}</div>}>
            <Text
              label={isNormalForm(type) ? translations.COMPANY : undefined}
              id={company.id}
              value={company.value}
              onChange={handleFieldChange('company')}
              placeholder={isNormalForm(type) ? translations.COMPANY_PLACEHOLDER : translations.COMPANY}
              onValidChange={handleValidFieldChange('company')}
              messages={{
                valid: translations.COMPANY_MESSAGE_VALID,
                invalid: translations.COMPANY_MESSAGE_INVALID
              }}
            />
          </Conditional>
          <Conditional
            condition={isNormalForm(type)}
            when={children => <div className="col-6 mb-3">{children}</div>}
            otherwise={children => <div className="input-grow">{children}</div>}>
            <Text
              label={isNormalForm(type) ? translations.VAT : undefined}
              id={vat.id}
              value={vat.value}
              onChange={handleFieldChange('vat')}
              placeholder={isNormalForm(type) ? translations.VAT_PLACEHOLDER : translations.VAT}
              onValidChange={handleValidFieldChange('vat')}
              messages={{
                valid: translations.VAT_MESSAGE_VALID,
                invalid: translations.VAT_MESSAGE_INVALID
              }}
            />
          </Conditional>
        </div>
      </fieldset>
    )}
  </I18nConsumer>
};
