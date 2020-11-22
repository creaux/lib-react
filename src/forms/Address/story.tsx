import React from 'react';
import { storiesOf } from '@storybook/react';
import { Address, AddressProps } from './component';
import { Form, FormType } from '../Form';

export const props: AddressProps = {
  street: {
    id: '123456',
    value: 'Some Street',
    datalist: ['Vodickova', 'Stromovka'],
  },
  streetNo: {
    id: '12345',
    value: '0',
    datalist: ['3', '33', '333'],
  },
  postcode: {
    id: '1234567',
    value: '12345',
    datalist: ['12345', '68789'],
  },
  countries: {
    id: 'country',
    value: 'czechRepublic',
    options: [
      {
        id: 'czechRepublic',
        title: 'Czech Republic',
        value: 'CZ',
      },
      {
        id: 'germany',
        title: 'Germany',
        value: 'DE',
      },
    ],
  },
  cities: {
    id: 'city',
    value: 'prague',
    options: [
      {
        id: 'prague',
        title: 'Prague',
        value: 'prague',
      },
      {
        id: 'berlin',
        title: 'Berlin',
        value: 'berlin',
      },
    ],
  },
  onFieldChange: () => () => {},
  onValidFieldChange: () => () => {},
  disabled: false,
};

const story = storiesOf('Atomic Design/Moleculs/forms/Address', module);

story.add('default', () => (
  <Form type={FormType.NORMAL} onSubmit={() => {}}>
    <Address {...props} />
  </Form>
));

story.add('onplace', () => (
  <Form type={FormType.ONPLACE} onSubmit={() => {}}>
    <Address {...props} />
  </Form>
));

story.add('inline', () => (
  <Form type={FormType.INLINE} onSubmit={() => {}}>
    <Address {...props} />
  </Form>
));
