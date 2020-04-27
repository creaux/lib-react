import React, { FunctionComponent } from 'react';
import { OnChange } from '../../types/form';
import { ISelect, IOption } from './types';
import { Conditional } from '../../Conditional/component';

export interface SelectProps extends ISelect {
  onChange: OnChange;
  placeholder: string;
  label?: string;
  message: string;
  className?: string;
}

export const Select: FunctionComponent<SelectProps> = ({
  label,
  id,
  options,
  value,
  onChange,
  placeholder,
  valid,
  message,
  className,
}) => (
  <Conditional condition={!!className} when={children => <div className={className}>{children}</div>}>
    {label ? <label htmlFor={id}>{label}</label> : null}
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
    {!valid ? (
      <small className="form-text invalid-feedback d-block">{message}</small>
    ) : null}
    {valid ? (
      <small className="form-text valid-feedback d-block">{message}</small>
    ) : null}
  </Conditional>
);
