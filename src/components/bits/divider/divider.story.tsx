import { Builder } from '../../../builder';
import { Meta, Story } from '@storybook/react/types-6-0';
import { createKind, Kinds } from '../../structure.enum';
import { Divider, DividerProps } from './divider.component';
import React from 'react';

export default Builder<Meta>()
  .title(createKind(Kinds.BITS, 'Divider'))
  .component(Divider)
  .build();

const Template: Story<DividerProps> = (args) => <Divider {...args} />;

export const Default = Template.bind({});

Default.args = Builder<DividerProps>().children('This is title').build();
