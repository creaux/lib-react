import React, { FunctionComponent } from 'react';
import { OnChange } from '../../types/form';
import { ICheckbox } from './types';

export interface CheckboxProps extends ICheckbox {
  onChange: OnChange;
}

export const Checkbox: FunctionComponent<CheckboxProps> = ({
  checked,
  id,
  title,
  onChange: handleChange
}) => (
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      checked={checked}
      id={id}
      onChange={handleChange}
      name={id}
    />
    <label className="form-check-label" htmlFor={id}>
      {title}
    </label>
  </div>
);
