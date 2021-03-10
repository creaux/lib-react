import React from 'react';
import { Button, ButtonProps } from './component';
import { Builder } from '../../builder';
import { Meta, Story } from '@storybook/react/types-6-0';
import {
  FunctionalityDesignKind,
  createFunctionalityDesign,
} from '../../components/structure.enum';
import { Variants } from './types';
import { Badges } from '../../badges.enum';

export default Builder<Meta>()
  .title(createFunctionalityDesign(FunctionalityDesignKind.BITS, 'Form/Button'))
  .component(Button)
  .build();

const Template: Story<ButtonProps> = (args) => <Button {...button} />;

const button = Builder<ButtonProps>()
  .variant(Variants.PRIMARY)
  .children('Primary')
  .build();

export const Primary = Template.bind({});

Primary.args = button;

Primary.parameters = {
  zeplinLink: [
    {
      name: 'Pristine',
      link:
        'zpl://components?coids=604922e7c59b8296ce0ee2ad&pid=6046a5e594128a11971b98e8',
    },
    {
      name: 'Hover',
      link:
        'zpl://components?pid=6046a5e594128a11971b98e8&coids=6047f7e1f26f39068ffc7896',
    },
    {
      name: 'Clicked',
      link:
        'zpl://components?pid=6046a5e594128a11971b98e8&coids=604922e756395c1315dc3465',
    },
    {
      name: 'Disabled',
      link:
        'zpl://components?pid=6046a5e594128a11971b98e8&coids=604922e7dfcfbb0665cf78a1',
    },
  ],
  badges: [Badges.DESIGN_LINKED],
};
