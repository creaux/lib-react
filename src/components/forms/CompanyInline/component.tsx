import React, { FunctionComponent } from 'react';
import { Text } from '../Input';
import { OnFieldChange, OnValidFieldChange } from '../../types/form';
import { ICompany } from './types';
import { I18nConsumer, Translations } from '../../I18n/component';

export interface CompanyInlineProps extends ICompany {
  onFieldChange: OnFieldChange<keyof ICompany>;
  onValidFieldChange: OnValidFieldChange<keyof ICompany>;
}

const defaultTranslations = {
  COMPANY: '',
  PLACEHOLDER_COMPANY: 'Your Company LTD',
  VAT: '',
  PLACEHOLDER_VAT: '12 45 78'
};

export interface CompanyInlineTranslations extends Translations {
  COMPANY: string;
  PLACEHOLDER_COMPANY: string;
  VAT: string;
  PLACEHOLDER_VAT: string;
}

export const CompanyInline: FunctionComponent<CompanyInlineProps> = ({
  company,
  vat,
  onFieldChange: handleFieldChange,
  onValidFieldChange: handleValidFieldChange
}) => (
  <I18nConsumer<CompanyInlineTranslations> defaultTranslations={defaultTranslations}>
    {translations => (
      <fieldset name="company">
        <div className="input-group">
          <div className="input-group-prepend">
            <Text
              label={translations.COMPANY}
              id={company.id}
              value={company.value}
              onChange={handleFieldChange('company')}
              placeholder={translations.PLACEHOLDER_COMPANY}
              onValidChange={handleValidFieldChange('company')}
              messages={company.messages}
            />
          </div>
          <Text
            label={translations.VAT}
            id={vat.id}
            value={vat.value}
            onChange={handleFieldChange('vat')}
            placeholder={translations.PLACEHOLDER_VAT}
            onValidChange={handleValidFieldChange('vat')}
            messages={vat.messages}
          />
        </div>
      </fieldset>
    )}
  </I18nConsumer>
);
