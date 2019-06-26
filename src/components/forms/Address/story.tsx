import React from 'react';
import { storiesOf } from '@storybook/react';
import { Address } from './component';

export const props = {
  street: {
    id: '123456',
    value: 'Some Street',
    datalist: ['Vodickova', 'Stromovka'],
    label: 'Street'
  },
  streetNo: {
    id: '12345',
    value: '0',
    datalist: ['3', '33', '333'],
    label: 'Street No.'
  },
  postcode: {
    id: '1234567',
    value: '12345',
    datalist: ['12345', '68789'],
    label: 'Postcode'
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
  onFieldChange: () => () => {}
};

storiesOf('Moleculs/forms/Person', module).add('default', () => (
  <Address {...props} />
));
