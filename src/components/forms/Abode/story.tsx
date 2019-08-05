import React from "react";
import { storiesOf } from "@storybook/react";
import { Abode, AbodeProps } from "./component";
import { Form } from "../Form";
import { FormType } from "../Form/component";

const { assign } = Object;

export const deliveryProps: AbodeProps = {
  forname: {
    id: 'forename',
    value: 'Karel',
    label: 'Forname',
    placeholder: 'Name',
    messages: {
      valid: '',
      invalid: ''
    },
  },
  surname: {
    id: 'surname',
    value: 'Vomacka',
    label: 'Surname',
    placeholder: "Surname",
    messages: {
      valid: '',
      invalid: ''
    },
  },
  street: {
    id: 'street',
    label: 'Street',
    value: 'Some Street',
    datalist: ['Vodickova', 'Stromovka'],
    placeholder: "Some Street",
    messages: {
      valid: '',
      invalid: ''
    },
  },
  streetNo: {
    id: 'streetNo',
    label: 'Street Number',
    value: '0',
    datalist: ['3', '33', '333'],
    placeholder: "5",
    messages: {
      valid: '',
      invalid: ''
    },
  },
  postcode: {
    id: 'postcode',
    label: 'Postcode',
    value: '12345',
    datalist: ['12345', '68789'],
    placeholder: "511 01",
    messages: {
      valid: '',
      invalid: ''
    },
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
  onValidFieldChange: () => () => {},
};

export const invoicingProps: AbodeProps = assign({}, deliveryProps, {
  company: {
    label: 'Company',
    value: 'Neco LTD',
    messages: {
      valid: '',
      invalid: ''
    },
  },
  vat: {
    label: 'VAT',
    value: '123456',
    messages: {
      valid: '',
      invalid: ''
    },
  },
  onFieldChange: () => () => {}
});

storiesOf('Moleculs/forms/Abode', module)
  .add('invoicing', () => <Form type={FormType.NORMAL} onSubmit={() => {}}><Abode {...invoicingProps} /></Form>)
  .add('delivery', () => <Form type={FormType.NORMAL} onSubmit={() => {}}><Abode {...deliveryProps} /></Form>);
