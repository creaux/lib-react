import React from 'react';
import { storiesOf } from '@storybook/react';
import { ProductDetail } from './component';
import { props as productDescriptionProps } from '../ProductDescription/mocks';
import { Navigation } from '../Navigation';
import { ReactComponent as Brand } from '../Navigation/svg.svg';

storiesOf('Templates/ProductDetail', module).add('default', () => (
  <ProductDetail
    {...productDescriptionProps}
    image="http://lorempixel.com/640/480/fashion"
  >
    <Navigation
      items={[{ title: 'Get to know Animaux!', link: 'http://' }]}
      Brand={Brand}
    />
  </ProductDetail>
));
