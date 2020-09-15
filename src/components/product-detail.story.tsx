import React from 'react';
import { storiesOf } from '@storybook/react';
import { ProductDetail } from './product-detail.component';
import { props as productDescriptionProps } from './product-description.mocks';
import { Navigation } from './navigation.component';
import { ReactComponent as Brand } from './navigation-brand.svg';
import { NavigationItems } from './navigation-items.component';
import { NavigationBrand } from './navigation-brand.component';

storiesOf('Atomic Design/Templates/ProductDetail', module).add(
  'default',
  () => (
    <ProductDetail
      {...productDescriptionProps}
      image="https://picsum.photos/id/745/1600/1200"
    >
      <Navigation>
        <NavigationItems
          items={[{ title: 'Get to know Animaux!', link: 'http://' }]}
          onClick={() => {}}
        ></NavigationItems>
        <NavigationBrand onClick={() => {}}>{Brand}</NavigationBrand>
      </Navigation>
    </ProductDetail>
  )
);
