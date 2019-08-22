import React, { FunctionComponent } from 'react';
import { OnChange } from '../../types/form';
import { ISelect, IOption } from './types';

export interface SelectProps extends ISelect {
  onChange: OnChange;
  placeholder: string;
}

export const Select: FunctionComponent<SelectProps> = ({
  label,
  id,
  options,
  value,
  onChange,
  placeholder
}) => (
  <>
    <label htmlFor={id}>{label}</label>
    <select
      value={value}
      className="custom-select form-control"
      id={id}
      onChange={onChange}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option: IOption) => (
        <option key={option.id} value={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  </>
);
