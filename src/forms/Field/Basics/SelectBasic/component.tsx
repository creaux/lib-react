import React, { FunctionComponent, useContext } from 'react';
import { OnChange } from '../../../../components/form.types';
import { IOption, ISelect } from '../../types';
import cx from 'classnames';
import { FormType, FormTypeContext } from '../../../Form/component';

export interface SelectBasicProps extends ISelect {
  onChange: OnChange;
  placeholder: string;
  label?: string;
  className?: string;
  disabled: boolean;
}

export const SelectBasic: FunctionComponent<SelectBasicProps> = ({
  id,
  options,
  value,
  onChange,
  placeholder,
  className,
  disabled,
}) => {
  const formType = useContext(FormTypeContext);
  return (
    <select
      value={value}
      className={cx(className, 'custom-select', {
        'pl-0 pt-0 pb-0':
          formType === FormType.ONPLACE || formType === FormType.INLINE,
      })}
      id={id}
      onChange={onChange}
      disabled={disabled}
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
  );
};
