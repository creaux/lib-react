import React, {
  FunctionComponent,
  ReactNode,
  createContext,
  FormEvent,
} from 'react';
import cx from 'classnames';

export enum FormType {
  NORMAL = 'normal',
  INLINE = 'inline',
  ONPLACE = 'onplace', // When we need to have error message in the field
}

export function isInlineForm(type: FormType) {
  return FormType.INLINE === type;
}

export function isNormalForm(type: FormType) {
  return FormType.NORMAL === type;
}

interface FormProps {
  children: ReactNode;
  type: FormType;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  className?: string;
}

export const FormTypeContext = createContext<FormType>(FormType.NORMAL);

export const Form: FunctionComponent<FormProps> = ({
  children,
  type,
  onSubmit: handleSubmit,
  className,
}) => {
  const props = {
    onSubmit: handleSubmit,
    className: cx(
      {
        'align-items-stretch flex-nowrap': FormType.ONPLACE === type,
      },
      className
    ),
  };
  return (
    <FormTypeContext.Provider value={type}>
      <form {...props}>{children}</form>
    </FormTypeContext.Provider>
  );
};
