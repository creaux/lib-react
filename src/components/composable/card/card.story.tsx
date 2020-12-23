import React from 'react';
import { Card, CardProps } from './card.component';
import { Button, Variants } from '../../../forms/Button/index';
import { Description } from '../../bits/typographical/description.component';
import { Label } from '../../bits/typographical/label.component';
import { Image } from '../../bits/visual/image/image.component';
import { asBackgroundProps } from '../../bits/visual/image/image.component.mock';
import { Builder } from '../../../builder';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Collect } from '../../explicit/checkout/collect/collect.component';
import { Name } from '../../bits/typographical/name.component';
import { Price } from '../../bits/typographical/price.component';
import { createKind, Kinds } from '../../structure.enum';

export default Builder<Meta>()
  .title(createKind(Kinds.COMPOSABLE, 'Card'))
  .component(Collect)
  .parameters({
    status: 'beta',
  })
  .build();

const Template: Story<CardProps> = (args) => (
  <Card {...args}>
    <Label>Label</Label>
    <Name>Product</Name>
    <Price currency="CZK">5000</Price>
    <Description>
      Cum navis mori, omnes paluses imperium gratis, secundus omniaes.
    </Description>
    <Image {...asBackgroundProps} />
    <Button onClick={() => {}}>Add to Cart</Button>
  </Card>
);

export const Default = Template.bind({});

Default.args = Builder<CardProps>().id('product').build();
