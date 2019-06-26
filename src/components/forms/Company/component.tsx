import React, { FunctionComponent } from 'react';
import { Input } from '../../forms/Input';
import { OnFieldChange } from '../../types/form';
import { ICompany } from './types';

export interface CompanyProps extends ICompany {
  onFieldChange: OnFieldChange<keyof ICompany>;
}

export const Company: FunctionComponent<CompanyProps> = ({
  company,
  vat,
  onFieldChange: handleFieldChange
}) => (
  <fieldset className="form-row" name="company">
    <div className="col-6 mb-3">
      <Input
        label={company.label}
        id={company.id}
        value={company.value}
        onChange={handleFieldChange('company')}
      />
    </div>
    <div className="col-6 mb-3">
      <Input
        label={vat.label}
        id={vat.id}
        value={vat.value}
        onChange={handleFieldChange('vat')}
      />
    </div>
  </fieldset>
);
