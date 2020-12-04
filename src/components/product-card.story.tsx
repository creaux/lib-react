import React from 'react';
import { storiesOf } from '@storybook/react';
import { ProductCard, ProductCardProps } from './product-card.component';
import { Button, Variants } from '../forms/Button/index';
import { Description } from './description.component';
import { Label } from './label.component';
import { Image } from './image.component';
import { asBackgroundProps } from './image.component.mock';
import { Builder } from '../builder';

const onAdd = () => {};

const productCardProps = Builder<ProductCardProps>()
  .price('300')
  .name('Some title')
  .build();

const story = storiesOf('Atomic Design/Moleculs/ProductCard', module);

story.add('default', () => (
  <ProductCard {...productCardProps}>
    <Label>Dolor</Label>
    <Description>
      Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </Description>
    <Button
      variant={Variants.OUTLINE_DARK}
      onClick={onAdd}
      className="align-self-center align-self-sm-stretch"
    >
      Add to Cart
    </Button>
  </ProductCard>
));

story.add('checkout', () => {
  return (
    <>
      <div className="w-100 ml-sm-8 mr-sm-8">
        <Button variant={Variants.LINK}>Go back</Button>
      </div>
      <ProductCard {...productCardProps}>
        <Image {...asBackgroundProps} />
      </ProductCard>
    </>
  );
});
