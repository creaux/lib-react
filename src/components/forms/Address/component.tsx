import React, { FunctionComponent } from 'react';
import { Text } from '../Input';
import { OnFieldChange, OnValidFieldChange } from '../../types/form';
import { Select } from '../../forms/Select';
import { IAddress } from './types';

export interface AddressProps extends IAddress {
  onFieldChange: OnFieldChange<keyof IAddress>;
  onValidFieldChange: OnValidFieldChange<keyof IAddress>;
}

export const Address: FunctionComponent<AddressProps> = ({
  street,
  streetNo,
  postcode,
  cities,
  countries,
  onFieldChange: handleFieldChange,
  onValidFieldChange: handleValidFieldChange
}) => (
  <fieldset name="address">
    <div className="form-row">
      <div className="col-6 mb-3">
        <Text
          label={street.label}
          id={street.id}
          {...street}
          onChange={handleFieldChange('street')}
          onValidChange={handleValidFieldChange('street')}
        />
      </div>
      <div className="col-2 mb-3">
        <Text
          label={streetNo.label}
          id={streetNo.id}
          {...streetNo}
          onChange={handleFieldChange('streetNo')}
          onValidChange={handleValidFieldChange('streetNo')}
        />
      </div>
      <div className="col-4 mb-3">
        <Text
          label={postcode.label}
          id={postcode.id}
          {...postcode}
          onChange={handleFieldChange('postcode')}
          onValidChange={handleValidFieldChange('postcode')}
        />
      </div>
    </div>
    <div className="form-row">
      <div className="col-6 mb-3">
        <Select
          label={cities.label}
          id={cities.id}
          {...cities}
          onChange={handleFieldChange('cities')}
          onValidChange={() => {}}
          placeholder=""
        />
      </div>
      <div className="col-6 mb-3">
        <Select
          label={countries.label}
          id={countries.id}
          {...countries}
          onChange={handleFieldChange('countries')}
          onValidChange={() => {}}
          placeholder=""
        />
      </div>
    </div>
  </fieldset>
);
