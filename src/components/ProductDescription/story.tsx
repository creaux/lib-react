import React from 'react';
import { storiesOf } from '@storybook/react';
import { ProductDescription } from './component';
import { props } from './mocks';

storiesOf('Moleculs/ProductDescription', module).add('default', () => (
  <ProductDescription {...props} />
));
