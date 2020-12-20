import React, { FunctionComponent } from 'react';
import { Address } from '../Address';
import { Company } from '../../components/company';
import { OnFieldChange, OnValidFieldChange } from '../../components/form.types';
import { IAbode } from './types';
import { Conditional } from '../../components/conditional.component';
import { IInput } from '../Field/types';

export interface AbodeProps extends IAbode {
  onFieldChange: OnFieldChange<keyof IAbode>;
  onValidFieldChange: OnValidFieldChange<keyof IAbode>;
  disabled: boolean;
}

export const Abode: FunctionComponent<AbodeProps> = ({
  company,
  vat,
  street,
  streetNo,
  postcode,
  cities,
  countries,
  onFieldChange: handleFieldChange,
  onValidFieldChange: handleValidFieldChange,
  disabled,
}) => (
  <>
    <Conditional
      condition={!!(vat && company)}
      when={() => (
        <Company
          company={company as IInput}
          vat={vat as IInput}
          onFieldChange={handleFieldChange}
          onValidFieldChange={handleValidFieldChange}
          disabled={disabled}
        />
      )}
    />
    <Address
      street={street}
      streetNo={streetNo}
      postcode={postcode}
      cities={cities}
      countries={countries}
      onFieldChange={handleFieldChange}
      onValidFieldChange={handleValidFieldChange}
      disabled={disabled}
    />
  </>
);
