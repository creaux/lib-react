import React from 'react';
import { storiesOf } from '@storybook/react';
import { OneCheckout } from './component';
import { Form, FormType } from '../forms/Form/component';
import { props as productDescriptionProps} from '../ProductDescription/mocks';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';

const story = storiesOf('Templates/OneCheckout', module);

story.add('default', () => {
  return (
    <Elements stripe={loadStripe("pk_test_foDOWVGgi52RtXjMWXhszdkA00X2vCJ2ZB")}>
      <Form type={FormType.INLINE} onSubmit={() => {}}>
        <OneCheckout product={productDescriptionProps} />
      </Form>
    </Elements>
  );
});
