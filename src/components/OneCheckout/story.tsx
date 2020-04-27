import React from 'react';
import { storiesOf } from '@storybook/react';
import { OneCheckout } from './component';
import { Form, FormType } from '../forms/Form/component';
import { props as productDescriptionProps} from '../ProductDescription/mocks';

const story = storiesOf('Templates/OneCheckout', module);

story.add('default', () => {
  return (
    <Form type={FormType.INLINE} onSubmit={() => {}}>
      <OneCheckout product={productDescriptionProps} />
    </Form>
  );
});
