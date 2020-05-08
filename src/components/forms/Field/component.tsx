import React, { FunctionComponent, useContext } from "react";
import { OnChange } from "../../types/form";
import { FieldType, InputTypeEnum, IOption } from "./types";
import { FormType, FormTypeContext } from "../Form/component";
import cx from "classnames";
import { Conditional } from "../../Conditional/component";
import { Message } from "./hoc/validators/types";
import { Input } from "./Basics/Input/component";
import { Switch } from "../../Switch/component";
import { SelectBasic } from "./Basics/SelectBasic/component";

export interface InputProps {
  id: string;
  value: string;
  type: InputTypeEnum;
  onChange: OnChange;
  message: Message;
  formType: FormType;
  placeholder: string;
  label?: string;
  fieldType?: FieldType;
  datalist?: (string)[];
  options?: IOption[];
}

export const Field: FunctionComponent<InputProps> = props => {
  const {
    placeholder,
    label,
    id,
    datalist,
    value,
    type = InputTypeEnum.TEXT,
    onChange: handleChange,
    message,
    fieldType = FieldType.INPUT,
    options
  } = props;

  const formType = useContext(FormTypeContext);

  const wrapperClasses = cx({
    "form-group": FormType.NORMAL === formType,
    "h-100":
      FormType.ONPLACE === formType,
    "form-control":
      FormType.ONPLACE === formType || FormType.INLINE === formType,
    "is-invalid":
      (FormType.ONPLACE === formType || FormType.INLINE) === formType &&
      message.type === 1,
    "is-valid":
      (FormType.ONPLACE === formType || FormType.INLINE) &&
      message.type === 0 &&
      value.length > 0,
    "d-flex flex-column": fieldType === FieldType.SELECT
  });

  const inputClasses = cx({
    "form-control": FormType.NORMAL === formType,
    "h-auto": FieldType.SELECT === fieldType && FormType.ONPLACE === formType,
    "border-0 w-100":
      FormType.ONPLACE === formType || FormType.INLINE === formType,
    "is-invalid": FormType.NORMAL === formType && message.type === 1,
    "is-valid":
      FormType.NORMAL === formType && message.type === 0 && value.length > 0,
    "bg-transparent":
      FormType.ONPLACE === formType || FormType.INLINE === formType
  });

  return (
    <Conditional
      condition={wrapperClasses.length > 0}
      when={children => <div className={wrapperClasses}>{children}</div>}
      otherwise={children => children}
    >
      <Conditional
        condition={formType === FormType.NORMAL && !!label}
        when={() => (
          <label htmlFor={id} className="mr-3">
            {label}
          </label>
        )}
      />
      <Conditional
        condition={fieldType === FieldType.INPUT}
        when={() => (
          <Input
            type={type}
            className={inputClasses}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            datalist={datalist}
          />
        )}
      />
      <Conditional
        condition={fieldType === FieldType.SELECT}
        when={() => (
          <SelectBasic
            className={inputClasses}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            options={options}
          />
        )}
      />
      <Conditional
        condition={formType !== FormType.INLINE}
        when={() => (
          <Switch cases={message.type}>
            <small className="form-text valid-feedback d-block text-nowrap text-truncate">
              {message.value}
            </small>
            <small className="form-text invalid-feedback d-block text-nowrap text-truncate">
              {message.value}
            </small>
            <small className="form-text text-muted text-nowrap text-truncate">{message.value}</small>
          </Switch>
        )}
      />
    </Conditional>
  );
};
