import React from 'react';
import { Shipping, ShippingProps } from './container';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Builder } from '../../builder';
import { ShippingTitles } from './component';
import { action } from '@storybook/addon-actions';

export default Builder<Meta>()
  .title('Controls/Forms/Shipping')
  .component(Shipping)
  .argTypes({ titles: { control: 'object' }})
  .build();

const Template: Story<ShippingProps> = args => <Shipping {...args} />;

export const Default = Template.bind({});

Default.args = Builder<ShippingProps>()
  .onFormChange(action('onFormChange'))
  .onFormValidChange(action('onFormValidChange'))
  .titles(Builder<ShippingTitles>()
    .delivery('Delivery')
    .company('Company')
    .isCompany('Is that company')
    .terms('Agree with Terms and Conditions')
    .data('Agree with Privacy Policy')
    .build())
  .build();
