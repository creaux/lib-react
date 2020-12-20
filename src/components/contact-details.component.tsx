import React, {
  FormEvent,
  FunctionComponent,
  useEffect,
  useState,
} from 'react';
import { Person } from './person';
import { Contact } from '../forms/Contact';
import { IInput, OnValidChange } from '../forms/Field/types';
import { Builder } from '../builder';
import { OnFieldChange, OnValidFieldChange } from './form.types';
import { IPerson } from './types';
import { IContact } from '../forms/Contact/types';

const { values, assign } = Object;

export type OnContactChange = (state: ContactDetailsState) => void;

export interface ContactDetailsProps {
  onContactChange: OnContactChange;
  onContactValidChange: OnValidChange;
  disabled: boolean;
}

export interface ContactDetailsState {
  forname: IInput;
  surname: IInput;
  email: IInput;
  number: IInput;
}

export const ContactDetails: FunctionComponent<ContactDetailsProps> = ({
  disabled,
  onContactChange: handleContactChange,
  onContactValidChange: handleContactValidChange,
}) => {
  const [state, setState] = useState<ContactDetailsState>(
    Builder<ContactDetailsState>()
      .forname(Builder<IInput>().id('forname').value('').valid(false).build())
      .surname(Builder<IInput>().id('surname').value('').valid(false).build())
      .email(Builder<IInput>().id('email').value('').valid(false).build())
      .number(Builder<IInput>().id('phone').value('').valid(false).build())
      .build()
  );

  useEffect(() => {
    handleContactValidChange(
      values(state).every((element: IInput) => element.valid)
    );
    handleContactChange(state);
  }, [state]);

  const handleChange: OnFieldChange<keyof IPerson | keyof IContact> = (
    id: keyof IPerson | keyof IContact
  ) => (
    event: FormEvent<HTMLInputElement | HTMLSelectElement>,
    value?: any,
    selectedKey?: string
  ) => {
    setState((prev) =>
      assign({}, prev, { [id]: assign({}, prev[id], { value }) })
    );
  };

  const handleValidChange: OnValidFieldChange<
    keyof IPerson | keyof IContact
  > = (id: keyof IPerson | keyof IContact) => (valid: boolean) => {
    setState((prev) =>
      assign({}, prev, { [id]: assign({}, prev[id], { valid }) })
    );
  };

  return (
    <>
      <Person
        forname={state.forname}
        surname={state.surname}
        onFieldChange={handleChange}
        onFieldValidChange={handleValidChange}
        disabled={disabled}
      />
      <Contact
        onFieldChange={handleChange}
        onValidFieldChange={handleValidChange}
        disabled={disabled}
        email={state.email}
        number={state.number}
      />
    </>
  );
};
