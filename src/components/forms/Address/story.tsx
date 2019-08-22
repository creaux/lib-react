import React from 'react';
import { storiesOf } from '@storybook/react';
import { Address, AddressProps } from './component';
import { Form } from '../Form';
import { FormType } from '../Form/component';

export const props: AddressProps = {
  street: {
    id: '123456',
    value: 'Some Street',
    datalist: ['Vodickova', 'Stromovka'],
    label: 'Street',
    placeholder: '',
    messages: {
      valid: '',
      invalid: ''
    }
  },
  streetNo: {
    id: '12345',
    value: '0',
    datalist: ['3', '33', '333'],
    label: 'Street No.',
    placeholder: '',
    messages: {
      valid: '',
      invalid: ''
    }
  },
  postcode: {
    id: '1234567',
    value: '12345',
    datalist: ['12345', '68789'],
    label: 'Postcode',
    placeholder: '',
    messages: {
      valid: '',
      invalid: ''
    }
  },
  countries: {
    id: 'country',
    label: 'Country',
    value: 'czechRepublic',
    options: [
      {
        id: 'czechRepublic',
        title: 'Czech Republic',
        value: 'CZ'
      },
      {
        id: 'germany',
        title: 'Germany',
        value: 'DE'
      }
    ]
  },
  cities: {
    id: 'city',
    label: 'City',
    value: 'prague',
    options: [
      {
        id: 'prague',
        title: 'Prague',
        value: 'prague'
      },
      {
        id: 'berlin',
        title: 'Berlin',
        value: 'berlin'
      }
    ]
  },
  onFieldChange: () => () => {},
  onValidFieldChange: () => () => {}
};

storiesOf('Moleculs/forms/Person', module).add('default', () => (
  <Form type={FormType.NORMAL} onSubmit={() => {}}>
    <Address {...props} />
  </Form>
));
