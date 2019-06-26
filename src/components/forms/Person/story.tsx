import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Person } from './component';
import { FormEvent } from 'react';
import { IPerson } from './types';
import { IInput } from '../../../forms/Input/types';

export const props = {
  forname: {
    value: 'Karel',
    id: 'forname',
    label: 'Forname'
  },
  surname: {
    value: 'Vomacka',
    id: 'surname',
    label: 'Surname'
  },
  onFieldChange: () => () => {}
};

const PersonContainer = () => {
  const [state, setState] = useState<IPerson>({
    forname: {
      value: '',
      id: 'forname',
      label: 'Forname'
    },
    surname: {
      value: '',
      id: 'surname',
      label: 'Surname'
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

  return <Person {...state} onFieldChange={handleFieldChange} />;
};

storiesOf('Moleculs/forms/Person', module)
  .add('default', () => <Person {...props} />)
  .add('state-full', () => <PersonContainer />);
