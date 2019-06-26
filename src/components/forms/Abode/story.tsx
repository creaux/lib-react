import React from 'react';
import { storiesOf } from '@storybook/react';
import { Abode, AbodeProps } from './component';

const { assign } = Object;

export const deliveryProps: AbodeProps = {
  forname: {
    id: 'foroname',
    value: 'Karel',
    label: 'Forname'
  },
  surname: {
    id: 'surname',
    value: 'Vomacka',
    label: 'Surname'
  },

  street: {
    id: 'street',
    label: 'Street',
    value: 'Some Street',
    datalist: ['Vodickova', 'Stromovka']
  },
  streetNo: {
    id: 'streetNo',
    label: 'Street Number',
    value: '0',
    datalist: ['3', '33', '333']
  },
  postcode: {
    id: 'postcode',
    label: 'Postcode',
    value: '12345',
    datalist: ['12345', '68789']
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

export const invoicingProps = assign({}, deliveryProps, {
  company: {
    value: 'Neco LTD'
  },
  vat: {
    value: '123456'
  },
  onFieldChange: () => () => {}
});

storiesOf('Moleculs/forms/Abode', module)
  .add('invoicing', () => <Abode {...invoicingProps} />)
  .add('delivery', () => <Abode {...deliveryProps} />);
