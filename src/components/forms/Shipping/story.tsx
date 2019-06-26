import React from 'react';
import { storiesOf } from '@storybook/react';
import { Shipping } from './component';
import { Shipping as ShippingContainer, ShippingState } from './container';
import { props as radioStackProps } from '../RadioStack/story';
import {
  invoicingProps,
  deliveryProps
} from '../Abode/story';
import { props as termsProps } from '../Checkbox/story';

const props = {
  distribution: radioStackProps,
  invoicing: invoicingProps,
  delivery: deliveryProps,
  terms: termsProps,
  data: termsProps,
  onFieldChange: () => () => {},
  onGroupChange: () => () => () => {},
  onSubmit() {}
};

const propsContainer = {
  titles: {
    distribution: {
      home: 'Home Delivery',
      personal: 'Personal Pickup'
    },
    address: {
      forename: 'Forename',
      surname: 'Surname',
      company: 'Company',
      vat: 'VAT',
      street: 'Street',
      streetNo: 'Street No.',
      postcode: 'Postcode',
      city: 'City',
      country: 'Country'
    },
    terms: 'I agree terms and conditions',
    data: 'I agree with GDPR'
  },
  onFormSubmit(data: ShippingState['data']) {
    console.log(data);
  }
};

storiesOf('Organisms/forms/Shipping', module)
  .add('default', () => <Shipping {...props} />)
  .add('state-full', () => <ShippingContainer {...propsContainer} />);
