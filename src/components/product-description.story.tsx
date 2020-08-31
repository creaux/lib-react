import React from 'react';
import { storiesOf } from '@storybook/react';
import { ProductDescription } from './product-description.component';
import { props } from './product-description.mocks';
import { Button, Variants } from './forms/Button/index';
import { Description } from './description.component';
import { Label } from './label.component';
import { Image } from './image.component';
import { asBackgroundProps } from './image.component.mock';

const onAdd = () => {};

const story = storiesOf('Atomic Design/Moleculs/ProductDescription', module);

story.add('default', () => (
  <ProductDescription {...props}>
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
  </ProductDescription>
));

story.add('checkout', () => {
  return (
    <>
      <div className="w-100 ml-sm-8 mr-sm-8">
        <Button variant={Variants.LINK}>Go back</Button>
      </div>
      <ProductDescription {...props}>
        <Image {...asBackgroundProps} />
      </ProductDescription>
    </>
  );
});
