import React, { FunctionComponent } from 'react';
import { Address } from '../Address';
import { Company } from '../Company';
import { Person } from '../Person';
import { OnFieldChange, OnValidFieldChange } from "../../types/form";
import { IAbode } from './types';

export interface AbodeProps extends IAbode {
  onFieldChange: OnFieldChange<keyof IAbode>;
  onValidFieldChange: OnValidFieldChange<keyof IAbode>;
}

export const Abode: FunctionComponent<AbodeProps> = ({
  forname,
  surname,
  company,
  vat,
  street,
  streetNo,
  postcode,
  cities,
  countries,
  onFieldChange: handleFieldChange,
  onValidFieldChange: handleValidFieldChange,
}) => (
  <>
    <Person
      forname={forname}
      surname={surname}
      onFieldChange={handleFieldChange}
      onFieldValidChange={handleValidFieldChange}
    />
    {vat && company ? (
      <Company
        company={company}
        vat={vat}
        onFieldChange={handleFieldChange}
        onValidFieldChange={handleValidFieldChange}
      />
    ) : null}
    <Address
      street={street}
      streetNo={streetNo}
      postcode={postcode}
      cities={cities}
      countries={countries}
      onFieldChange={handleFieldChange}
      onValidFieldChange={handleValidFieldChange}
    />
  </>
);
