import React, { FunctionComponent, useContext } from 'react';
import { OnChange } from '../../components/form.types';
import { FieldType, InputTypeEnum, IOption } from './types';
import {
  FormType,
  FormTypeContext,
  isFloatingForm,
  isInlineFloatingForm,
  isNormalForm,
  isOnplaceForm,
  isOnplaceInlineFloatingForm,
} from '../Form/component';
import cx from 'classnames';
import { Conditional } from '../../components/conditional.component';
import { Message } from './hoc/validators/types';
import { Input } from './Basics/Input/component';
import { Switch } from '../../components/switch.component';
import { SelectBasic } from './Basics/SelectBasic/component';

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
  datalist?: string[];
  options?: IOption[];
  disabled: boolean;
}

export const Field: FunctionComponent<InputProps> = (props) => {
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
    options,
    disabled,
  } = props;

  const formType = useContext(FormTypeContext);

  const labelClasses = cx('mr-3');

  const wrapperClasses = cx({
    'floating-group': isFloatingForm(formType),
    'position-relative': isFloatingForm(formType),
    'form-group': isNormalForm(formType),
    'h-100': isOnplaceForm(formType),
    'h-auto': isFloatingForm(formType),
    'form-control': isOnplaceInlineFloatingForm(formType),
    'is-invalid': isOnplaceInlineFloatingForm(formType) && message.type === 1,
    'is-valid':
      isOnplaceInlineFloatingForm(formType) &&
      message.type === 0 &&
      value.length > 0,
    'd-flex flex-column': fieldType === FieldType.SELECT,
    disabled: isOnplaceInlineFloatingForm(formType) && disabled,
  });

  const inputClasses = cx({
    'form-control': isNormalForm(formType),
    'h-auto': FieldType.SELECT === fieldType && FormType.ONPLACE === formType,
    'border-0 w-100': isOnplaceInlineFloatingForm(formType),
    'is-invalid': FormType.NORMAL === formType && message.type === 1,
    'is-valid':
      FormType.NORMAL === formType && message.type === 0 && value.length > 0,
    'bg-transparent': isOnplaceInlineFloatingForm(formType),
  });

  return (
    <Conditional
      condition={wrapperClasses.length > 0}
      when={(children) => <div className={wrapperClasses}>{children}</div>}
      otherwise={(children) => children}
    >
      <Conditional
        condition={isNormalForm(formType) && !!label}
        when={() => (
          <label htmlFor={id} className={labelClasses}>
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
            disabled={disabled}
          />
        )}
      />
      <Conditional
        condition={isFloatingForm(formType) && !!label}
        when={() => (
          <label htmlFor={id} className={labelClasses}>
            {label}
          </label>
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
            options={options as IOption[]}
            disabled={disabled}
          />
        )}
      />
      <Conditional
        condition={!isInlineFloatingForm(formType)}
        when={() => (
          <Switch cases={message.type}>
            <small className="form-text valid-feedback d-block text-nowrap text-truncate">
              {message.value}
            </small>
            <small className="form-text invalid-feedback d-block text-nowrap text-truncate">
              {message.value}
            </small>
            <small className="form-text text-muted text-nowrap text-truncate">
              {message.value}
            </small>
          </Switch>
        )}
      />
    </Conditional>
  );
};
