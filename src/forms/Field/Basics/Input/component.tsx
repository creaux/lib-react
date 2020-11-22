import React, { FunctionComponent } from 'react';
import { InputTypeEnum } from '../../types';
import { OnChange } from '../../../../components/form.types';

export interface InputProps {
  id: string;
  type: InputTypeEnum;
  value: string;
  datalist?: string[];
  onChange: OnChange;
  placeholder: string;
  className: string;
  disabled: boolean;
}

export const Input: FunctionComponent<InputProps> = ({
  id,
  onChange: handleChange,
  type,
  placeholder,
  className,
  value,
  datalist,
  disabled,
}) => (
  <>
    <input
      type={type}
      className={className}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      name={id}
      disabled={disabled}
    />
    {datalist && datalist.length > 0 ? (
      <datalist>
        {datalist.map((option: string, i: number) => (
          <option key={i} value={option} />
        ))}
      </datalist>
    ) : null}
  </>
);
