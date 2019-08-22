import React, { FormEvent, useState } from "react";
import { storiesOf } from "@storybook/react";
import { Person, PersonProps } from "./component";
import { IPerson } from "./types";
import { IInput } from "../Input/types";

export const props: PersonProps = {
  forname: {
    value: 'Karel',
    id: 'forname',
    label: 'Forname',
    placeholder: '',
    messages: {
      valid: '',
      invalid: ''
    }
  },
  surname: {
    value: 'Vomacka',
    id: 'surname',
    label: 'Surname',
    placeholder: '',
    messages: {
      valid: '',
      invalid: ''
    }
  },
  onFieldChange: () => () => {},
  onFieldValidChange: () => () => {}
};

const PersonContainer = () => {
  const [state, setState] = useState<IPerson>({
    forname: {
      value: '',
      id: 'forname',
      label: 'Forname',
      placeholder: '',
      messages: {
        valid: '',
        invalid: ''
      }
    },
    surname: {
      value: '',
      id: 'surname',
      label: 'Surname',
      placeholder: '',
      messages: {
        valid: '',
        invalid: ''
      }
    }
  });

  type id = 'forname' | 'surname';

  const handleFieldChange = (id: id) => (
    e: FormEvent<HTMLInputElement | HTMLSelectElement>,
    value: IInput
  ) => {
    console.log({ ...state, [id]: value });
    setState({ ...state, [id]: value });
  };

  return <Person {...state} onFieldChange={handleFieldChange} onFieldValidChange={() => () => {}} />;
};

storiesOf('Moleculs/forms/Person', module)
  .add('default', () => <Person {...props} />)
  .add('state-full', () => <PersonContainer />);
