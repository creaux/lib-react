import React, { FunctionComponent, useContext } from 'react';
import { Text } from '../Field';
import { OnFieldChange, OnValidFieldChange } from '../../types/form';
import { ICompany } from './types';
import { I18nConsumer } from '../../I18n/component';
import defaultTranslations from './en.json';
import { Conditional } from '../../conditional.component';
import {
  FormTypeContext,
  hasGridRow,
  hasLabel,
  hasPlaceholder,
  isNormalForm,
} from '../Form/component';

export interface CompanyProps extends ICompany {
  onFieldChange: OnFieldChange<keyof ICompany>;
  onValidFieldChange: OnValidFieldChange<keyof ICompany>;
}

export interface CompanyTranslations {
  COMPANY: string;
  COMPANY_PLACEHOLDER: string;
  COMPANY_MESSAGE_VALID: string;
  COMPANY_MESSAGE_INVALID: string;
  COMPANY_MESSAGE_DEFAULT: string;
  VAT: string;
  VAT_PLACEHOLDER: string;
  VAT_MESSAGE_VALID: string;
  VAT_MESSAGE_INVALID: string;
  VAT_MESSAGE_DEFAULT: string;
}

export const Company: FunctionComponent<CompanyProps> = ({
  company,
  vat,
  onFieldChange: handleFieldChange,
  onValidFieldChange: handleValidFieldChange,
}) => {
  const type = useContext(FormTypeContext);
  return (
    <I18nConsumer<CompanyTranslations>
      defaultTranslations={defaultTranslations}
    >
      {(translations) => (
        <fieldset name="company">
          <div className={hasGridRow(type) ? 'form-row' : 'input-group'}>
            <Conditional
              condition={hasGridRow(type)}
              when={(children) => <div className="col-6 mb-3">{children}</div>}
              otherwise={(children) => children}
            >
              <Text
                label={hasLabel(type) ? translations.COMPANY : undefined}
                id={company.id}
                value={company.value}
                onChange={handleFieldChange('company')}
                placeholder={
                  hasPlaceholder(type)
                    ? translations.COMPANY_PLACEHOLDER
                    : translations.COMPANY
                }
                onValidChange={handleValidFieldChange('company')}
                messages={[
                  translations.COMPANY_MESSAGE_VALID,
                  translations.COMPANY_MESSAGE_INVALID,
                  translations.COMPANY_MESSAGE_DEFAULT,
                ]}
              />
            </Conditional>
            <Conditional
              condition={hasGridRow(type)}
              when={(children) => <div className="col-6 mb-3">{children}</div>}
              otherwise={(children) => children}
            >
              <Text
                label={hasLabel(type) ? translations.VAT : undefined}
                id={vat.id}
                value={vat.value}
                onChange={handleFieldChange('vat')}
                placeholder={
                  hasPlaceholder(type)
                    ? translations.VAT_PLACEHOLDER
                    : translations.VAT
                }
                onValidChange={handleValidFieldChange('vat')}
                messages={[
                  translations.VAT_MESSAGE_VALID,
                  translations.VAT_MESSAGE_INVALID,
                  translations.VAT_MESSAGE_DEFAULT,
                ]}
              />
            </Conditional>
          </div>
        </fieldset>
      )}
    </I18nConsumer>
  );
};
