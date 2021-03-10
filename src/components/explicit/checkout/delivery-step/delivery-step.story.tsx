import { Builder } from '../../../../builder';
import { Meta, Story } from '@storybook/react/types-6-0';
import {
  createFunctionalityDesign,
  FunctionalityDesignKind,
} from '../../../structure.enum';
import { DeliveryStep, DeliveryStepProps } from './delivery-step.component';
import React from 'react';

export default Builder<Meta>()
  .title(
    createFunctionalityDesign(FunctionalityDesignKind.EXPLICIT, 'Delivery Step')
  )
  .component(DeliveryStep)
  .build();

const Template: Story<DeliveryStepProps> = (args) => <DeliveryStep {...args} />;

export const Default = Template.bind({});

Default.args = Builder<DeliveryStepProps>()
  .disabled(false)
  .onContactChange(() => {})
  .onContactValidChange(() => {})
  .onDataChange(() => {})
  .onTermsChange(() => {})
  .onDeliveryChange(() => {})
  .onDeliveryValidChange(() => {})
  .onNextStepChange(() => {})
  .valid(false)
  .build();
