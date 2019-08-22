import React, { FunctionComponent } from 'react';
import { Text } from '../Input';
import { OnFieldChange, OnValidFieldChange } from '../../types/form';
import { ICompany } from './types';

export interface CompanyProps extends ICompany {
  onFieldChange: OnFieldChange<keyof ICompany>;
  onValidFieldChange: OnValidFieldChange<keyof ICompany>;
}

export const Company: FunctionComponent<CompanyProps> = ({
  company,
  vat,
  onFieldChange: handleFieldChange,
  onValidFieldChange: handleValidFieldChange
}) => (
  <fieldset name="company">
    <div className="form-row">
      <div className="col-6 mb-3">
        <Text
          label={company.label}
          id={company.id}
          value={company.value}
          onChange={handleFieldChange('company')}
          placeholder={company.placeholder}
          onValidChange={handleValidFieldChange('company')}
          messages={company.messages}
        />
      </div>
      <div className="col-6 mb-3">
        <Text
          label={vat.label}
          id={vat.id}
          value={vat.value}
          onChange={handleFieldChange('vat')}
          placeholder={vat.placeholder}
          onValidChange={handleValidFieldChange('vat')}
          messages={vat.messages}
        />
      </div>
    </div>
  </fieldset>
);
