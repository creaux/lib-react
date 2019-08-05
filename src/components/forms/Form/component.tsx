import React, { FunctionComponent, ReactNode, createContext, FormEvent } from "react";
import cx from "classnames";

export enum FormType {
  NORMAL= 'normal',
  INLINE = 'inline',
  ONPLACE = 'onplace' // When we need to have error message in the field
}

interface FormProps {
  children: ReactNode;
  type: FormType;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void,
  className?: string,
}

export const FormContext = createContext<FormType>(FormType.NORMAL);

export const Form: FunctionComponent<FormProps> = ({ children, type, onSubmit: handleSubmit, className }) => {
  const props = {
    onSubmit: handleSubmit,
    className: cx(
      { 'form-inline': FormType.INLINE === type },
      { 'align-items-stretch form-inline flex-nowrap': FormType.ONPLACE === type },
      className)
  };
  return <FormContext.Provider value={type}>
    <form  {...props}>{children}</form>
  </FormContext.Provider>
};
