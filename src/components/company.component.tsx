import React, { FunctionComponent, useContext } from 'react';
import { Alpha } from '../forms/Field';
import { Conditional } from './utility/conditional.component';
import {
  FormTypeContext,
  isNormalFloatingForm,
  isNormalForm,
} from '../forms/Form/component';
import { CompanyI18nProps } from './company.i18n';

export interface CompanyProps extends CompanyI18nProps {
  companyHeading: string;
  companyPlaceholder: string;
  companyMessageValid: string;
  companyMessageInvalid: string;
  companyMessageDefault: string;
  vatHeading: string;
  vatPlaceholder: string;
  vatMessageValid: string;
  vatMessageInvalid: string;
  vatMessageDefault: string;
}

export const Company: FunctionComponent<CompanyProps> = ({
  company,
  vat,
  onFieldChange: handleFieldChange,
  onValidFieldChange: handleValidFieldChange,
  companyHeading,
  companyPlaceholder,
  companyMessageValid,
  companyMessageInvalid,
  companyMessageDefault,
  vatHeading,
  vatPlaceholder,
  vatMessageValid,
  vatMessageInvalid,
  vatMessageDefault,
  disabled,
}) => {
  const type = useContext(FormTypeContext);
  return (
    <fieldset name="company">
      <div className={isNormalForm(type) ? 'form-row' : 'input-group'}>
        <Conditional
          condition={isNormalForm(type)}
          when={(children) => <div className="col-6 mb-3">{children}</div>}
          otherwise={(children) => children}
        >
          <Alpha
            label={isNormalFloatingForm(type) ? companyHeading : undefined}
            id={company.id}
            value={company.value}
            onChange={handleFieldChange('company')}
            placeholder={
              isNormalForm(type) ? companyPlaceholder : companyHeading
            }
            onValidChange={handleValidFieldChange('company')}
            messages={[
              companyMessageValid,
              companyMessageInvalid,
              companyMessageDefault,
            ]}
            disabled={disabled}
          />
        </Conditional>
        <Conditional
          condition={isNormalForm(type)}
          when={(children) => <div className="col-6 mb-3">{children}</div>}
          otherwise={(children) => children}
        >
          <Alpha
            label={isNormalFloatingForm(type) ? vatHeading : undefined}
            id={vat.id}
            value={vat.value}
            onChange={handleFieldChange('vat')}
            placeholder={isNormalForm(type) ? vatPlaceholder : vatHeading}
            onValidChange={handleValidFieldChange('vat')}
            messages={[vatMessageValid, vatMessageInvalid, vatMessageDefault]}
            disabled={disabled}
          />
        </Conditional>
      </div>
    </fieldset>
  );
};
