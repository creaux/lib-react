import { Builder } from '../../../builder';
import { Meta, Story } from '@storybook/react/types-6-0';
import {
  createFunctionalityDesign,
  FunctionalityDesignKind,
} from '../../structure.enum';
import { Divider, DividerProps } from './divider.component';
import React from 'react';

export default Builder<Meta>()
  .title(createFunctionalityDesign(FunctionalityDesignKind.BITS, 'Divider'))
  .component(Divider)
  .build();

const Template: Story<DividerProps> = (args) => <Divider {...args} />;

export const Default = Template.bind({});

Default.args = Builder<DividerProps>().children('This is title').build();
