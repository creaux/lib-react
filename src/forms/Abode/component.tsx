import React, { FunctionComponent } from 'react';
import { Address } from '../Address';
import { Company } from '../../components/company';
import { Person } from '../../components/person';
import { OnFieldChange, OnValidFieldChange } from '../../components/form.types';
import { AbodeBuilder, IAbode } from './types';
import { Conditional } from '../../components/conditional.component';
import { IInput } from '../Field/types';

export class AbodePropsBuilder extends AbodeBuilder {
  onFieldChange!: OnFieldChange<keyof IAbode>;
  onValidFieldChange!: OnValidFieldChange<keyof IAbode>;
  disabled!: boolean;

  withOnFieldChange(onFieldChange: OnFieldChange<keyof IAbode>) {
    this.onFieldChange = onFieldChange;
  }

  withValidFieldChange(onValidFieldChange: OnValidFieldChange<keyof IAbode>) {
    this.onValidFieldChange = onValidFieldChange;
  }

  build(): AbodeProps {
    return {
      ...super.build(),
      onFieldChange: this.onFieldChange,
      onValidFieldChange: this.onValidFieldChange,
      disabled: this.disabled,
    };
  }
}

export interface AbodeProps extends IAbode {
  onFieldChange: OnFieldChange<keyof IAbode>;
  onValidFieldChange: OnValidFieldChange<keyof IAbode>;
  disabled: boolean;
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
  disabled,
}) => (
  <>
    <div>
      <Person
        forname={forname}
        surname={surname}
        onFieldChange={handleFieldChange}
        onFieldValidChange={handleValidFieldChange}
        disabled={disabled}
      />
    </div>
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
