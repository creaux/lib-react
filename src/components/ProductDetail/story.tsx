import React from 'react';
import { storiesOf } from '@storybook/react';
import { ProductDetail } from './component';
import { props as productDescriptionProps } from '../ProductDescription/mocks';
import { Navigation } from '../navigation.component';
import { ReactComponent as Brand } from '../navigation-brand.svg';
import { NavigationItems } from '../navigation-items.component';
import { NavigationBrand } from '../navigation-brand.component';

storiesOf('Templates/ProductDetail', module).add('default', () => (
  <ProductDetail
    {...productDescriptionProps}
    image="https://picsum.photos/id/745/1600/1200"
  >
    <Navigation>
      <NavigationItems
        items={[{ title: 'Get to know Animaux!', link: 'http://' }]}
      />
      <NavigationBrand brand={Brand} link="#home" />
    </Navigation>
  </ProductDetail>
));
