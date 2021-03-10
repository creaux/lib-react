import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { Builder } from '../../../../builder';
import { Collect, CollectProduct, CollectProps } from './collect.component';
import {
  createFunctionalityDesign,
  FunctionalityDesignKind,
} from '../../../structure.enum';
import { Default as DeliveryStepDefault } from '../delivery-step/delivery-step.story';
import { DeliveryStepProps } from '../delivery-step/delivery-step.component';

export default Builder<Meta>()
  .title(createFunctionalityDesign(FunctionalityDesignKind.EXPLICIT, 'Collect'))
  .component(Collect)
  .build();

const Template: Story<CollectProps> = (args) => <Collect {...args} />;

export const Default = Template.bind({});

Default.args = Builder<CollectProps>()
  .handleCollect(action('Handle Collect'))
  .product(
    Builder<CollectProduct>()
      .id('product1')
      .images(['https://picsum.photos/id/100/2500/1656'])
      .name('Cool Hairdresser')
      .brand('ANIMO')
      .price('5000')
      .currency('CZK')
      .build()
  )
  .children(
    <DeliveryStepDefault {...(DeliveryStepDefault.args as DeliveryStepProps)} />
  )
  .build();
