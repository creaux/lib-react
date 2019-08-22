import React, { FunctionComponent } from 'react';
import { OnChange } from '../../types/form';
import { IInputDataTyped, InputTypeEnum } from "./types";
import { FormType } from "../Form/component";
import cx from 'classnames';

export interface InputProps extends IInputDataTyped {
  onChange: OnChange;
  message: string,
  valid: boolean,
  formType: FormType
}

export const Input: FunctionComponent<InputProps> = props => {
  const {
    placeholder,
    label,
    id,
    datalist,
    value,
    type = InputTypeEnum.TEXT,
    onChange: handleChange,
    message,
    valid,
    formType
  } = props;

  const wrapperClasses = cx({
    'form-group': FormType.NORMAL === formType,
    'form-control': FormType.ONPLACE === formType
  });

  const inputClasses = cx({
    'form-control': FormType.NORMAL === formType || FormType.INLINE === formType,
    'border-0 w-100': FormType.ONPLACE === formType,
  });

  return (
    <div className={wrapperClasses}>
      {label ? <label htmlFor={id} className="mr-3">{label}</label> : null}
      <input
        type={type}
        className={inputClasses}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        name={id}
      />
      {datalist && datalist.length > 0 ? (
        <datalist>
          {datalist.map((option: string, i: number) => (
            <option key={i} value={option} />
          ))}
        </datalist>
      ) : null}
      {!valid ? <small className="form-text invalid-feedback d-block">
        {message}
      </small> : null}
      {valid ? <small className="form-text valid-feedback d-block">
        {message}
      </small> : null}
    </div>
  );
};
