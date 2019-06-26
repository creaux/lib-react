import React, { FunctionComponent } from 'react';
import { Input } from '../../forms/Input';
import { OnFieldChange } from '../../types/form';
import { IPerson } from './types';

export interface PersonProps extends IPerson {
  onFieldChange: OnFieldChange<keyof IPerson>;
}

export const Person: FunctionComponent<PersonProps> = ({
  forname,
  surname,
  onFieldChange: handleFieldChange
}) => (
  <fieldset className="form-row" name="name">
    <div className="col-6 mb-3">
      <Input
        label={forname.label}
        id={forname.id}
        value={forname.value}
        onChange={handleFieldChange('forname')}
      />
    </div>
    <div className="col-6 mb-3">
      <Input
        label={surname.label}
        id={surname.id}
        value={surname.value}
        onChange={handleFieldChange('surname')}
      />
    </div>
  </fieldset>
);
