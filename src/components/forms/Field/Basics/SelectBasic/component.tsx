import React, { FunctionComponent, useContext } from "react";
import { OnChange } from "../../../../types/form";
import { IOption, ISelect } from "../../types";
import cx from "classnames";
import { FormType, FormTypeContext } from "../../../Form/component";

export interface SelectBasicProps extends ISelect {
  onChange: OnChange;
  placeholder: string;
  label?: string;
  className?: string;
}

export const SelectBasic: FunctionComponent<SelectBasicProps> = ({
  id,
  options,
  value,
  onChange,
  placeholder,
  className
}) => {
  const formType = useContext(FormTypeContext);
  return (
    <select
      value={value}
      className={cx(className, "custom-select", {
        "pl-0 pt-0 pb-0":
          formType === FormType.ONPLACE || formType === FormType.INLINE
      })}
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
  );
};
