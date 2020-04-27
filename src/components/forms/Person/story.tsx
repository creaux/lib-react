import React, { FormEvent, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Person, PersonProps } from './component';
import { IPerson } from './types';
import { IInput } from '../Input/types';
import { Form, FormType } from '../Form';

export const props: PersonProps = {
  forname: {
    value: 'Karel',
    id: 'forname',
    messages: {
      valid: '32432',
      invalid: 'sdfsd'
    }
  },
  surname: {
    value: 'Vomacka',
    id: 'surname',
    messages: {
      valid: 'sdfsf',
      invalid: 'sdfdf'
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
      messages: {
        valid: 'abcs',
        invalid: 'asdas'
      }
    },
    surname: {
      value: '',
      id: 'surname',
      messages: {
        valid: '234234',
        invalid: '234324'
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

  return (
    <Person
      {...state}
      onFieldChange={handleFieldChange}
      onFieldValidChange={() => () => {}}
    />
  );
};

storiesOf('Moleculs/forms/Person', module)
  .add('default', () => (
    <Form type={FormType.NORMAL} onSubmit={() => {}}>
      <Person {...props} />
    </Form>
  ))
  .add('inline', () => (
    <Form type={FormType.INLINE} onSubmit={() => {}}>
      <Person {...props} />
    </Form>
  ))
  .add('state-full', () => <PersonContainer />);
