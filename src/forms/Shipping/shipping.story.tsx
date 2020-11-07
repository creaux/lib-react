import React from 'react';
import { Shipping } from './shipping.container';
import { ShippingAbstractProps } from './shipping.abstract.container';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Builder } from '../../builder';
import { action } from '@storybook/addon-actions';

export default Builder<Meta>()
  .title('Controls/Forms/Shipping')
  .component(Shipping)
  .build();

const Template: Story<ShippingAbstractProps> = (args) => <Shipping {...args} />;

export const Default = Template.bind({});

Default.args = Builder<ShippingAbstractProps>()
  .onFormChange(action('onFormChange'))
  .onFormValidChange(action('onFormValidChange'))
  .build();
