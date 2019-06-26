import React, { FunctionComponent } from 'react';
import { OnChange } from '../../../types/form';
import { IInputData, InputTypeEnum } from './types';

export interface InputProps extends IInputData {
  onChange: OnChange;
}

export const Input: FunctionComponent<InputProps> = props => {
  const {
    placeholder,
    label,
    id,
    datalist,
    value,
    type = InputTypeEnum.TEXT,
    onChange: handleChange
  } = props;
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
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
};
