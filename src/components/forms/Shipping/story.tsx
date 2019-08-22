import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Shipping as ShippingContainer,
  ShippingProps,
  ShippingState
} from './container';

const propsContainer: ShippingProps = {
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

storiesOf('Organisms/forms/Shipping', module).add('default', () => (
  <ShippingContainer {...propsContainer} />
));
