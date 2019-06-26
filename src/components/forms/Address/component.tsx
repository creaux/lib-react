import React, { FunctionComponent } from 'react';
import { Input } from '../../forms/Input';
import { OnFieldChange } from '../../types/form';
import { Select } from '../../forms/Select';
import { IAddress } from './types';

interface AddressProps extends IAddress {
  onFieldChange: OnFieldChange<keyof IAddress>;
}

export const Address: FunctionComponent<AddressProps> = ({
  street,
  streetNo,
  postcode,
  cities,
  countries,
  onFieldChange: handleFieldChange
}) => (
  <fieldset name="address">
    <div className="form-row">
      <div className="col-6 mb-3">
        <Input
          label={street.label}
          id={street.id}
          {...street}
          onChange={handleFieldChange('street')}
        />
      </div>
      <div className="col-2 mb-3">
        <Input
          label={streetNo.label}
          id={streetNo.id}
          {...streetNo}
          onChange={handleFieldChange('streetNo')}
        />
      </div>
      <div className="col-4 mb-3">
        <Input
          label={postcode.label}
          id={postcode.id}
          {...postcode}
          onChange={handleFieldChange('postcode')}
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
        />
      </div>
      <div className="col-6 mb-3">
        <Select
          label={countries.label}
          id={countries.id}
          {...countries}
          onChange={handleFieldChange('countries')}
        />
      </div>
    </div>
  </fieldset>
);
