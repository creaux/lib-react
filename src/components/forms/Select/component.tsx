import React, { FunctionComponent } from 'react';
import { OnChange } from '../../types/form';
import { ISelect, IOption } from './types';

export interface SelectProps extends ISelect {
  onChange: OnChange;
}

export const Select: FunctionComponent<SelectProps> = ({
  label,
  id,
  options,
  value,
  onChange
}) => (
  <>
    <label htmlFor="city">{label}</label>
    <select value={value} className="custom-select" id={id} onChange={onChange}>
      {options.map((option: IOption) => (
        <option key={option.id} value={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  </>
);
