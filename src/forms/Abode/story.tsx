import React from 'react';
import { storiesOf } from '@storybook/react';
import { Abode, AbodeProps } from './component';
import { Form } from '../Form';
import { FormType } from '../Form/component';

const { assign } = Object;

export const deliveryProps: AbodeProps = {
  forname: {
    id: 'forename',
    value: 'Karel',
  },
  surname: {
    id: 'surname',
    value: 'Vomacka',
  },
  street: {
    id: 'street',
    value: 'Some Street',
    datalist: ['Vodickova', 'Stromovka'],
  },
  streetNo: {
    id: 'streetNo',
    value: '0',
    datalist: ['3', '33', '333'],
  },
  postcode: {
    id: 'postcode',
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

export const invoicingProps: AbodeProps = assign({}, deliveryProps, {
  company: {
    value: 'Neco LTD',
  },
  vat: {
    value: '123456',
  },
  onFieldChange: () => () => {},
});

const story = storiesOf('Atomic Design/Moleculs/forms/Abode', module);

story.add('invoicing/normal', () => (
  <Form type={FormType.NORMAL} onSubmit={() => {}}>
    <Abode {...invoicingProps} />
  </Form>
));

story.add('invoicing/onplace', () => (
  <Form type={FormType.ONPLACE} onSubmit={() => {}}>
    <Abode {...invoicingProps} />
  </Form>
));

story.add('invoicing/inline', () => (
  <Form type={FormType.INLINE} onSubmit={() => {}}>
    <Abode {...invoicingProps} />
  </Form>
));

story.add('delivery/normal', () => (
  <Form type={FormType.NORMAL} onSubmit={() => {}}>
    <Abode {...deliveryProps} />
  </Form>
));

story.add('delivery/onplace', () => (
  <Form type={FormType.ONPLACE} onSubmit={() => {}}>
    <Abode {...deliveryProps} />
  </Form>
));

story.add('delivery/inline', () => (
  <Form type={FormType.INLINE} onSubmit={() => {}}>
    <Abode {...deliveryProps} />
  </Form>
));
