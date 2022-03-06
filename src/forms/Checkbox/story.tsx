import React from 'react';
import { Checkbox, CheckboxProps } from './component';
import { Builder } from '../../builder';
import { Meta, Story } from '@storybook/react/types-6-0';
import {
  FunctionalityDesignKind,
  createFunctionalityDesign,
} from '../../components/structure.enum';
import { Badges } from '../../badges.enum';

export default Builder<Meta>()
  .title(
    createFunctionalityDesign(FunctionalityDesignKind.BITS, 'Form/Checkbox')
  )
  .component(Checkbox)
  .build();

const Template: Story<CheckboxProps> = (args) => <Checkbox {...button} />;

const button = Builder<CheckboxProps>()
  .checked(false)
  .disabled(false)
  .id('checkbox')
  .onChange(() => {})
  .title('By checking this checkbox')
  .build();

export const Default = Template.bind({});

Default.args = button;

Default.parameters = {
  zeplinLink: [
    {
      name: 'Unticked / Pristine',
      link:
        'zpl://components?pid=6046a5e594128a11971b98e8&coids=60490eae469e5d088d24b73a',
    },
    {
      name: 'Unticked / Hover',
      link:
        'zpl://components?coids=60490eae0e907ba971347c21&pid=6046a5e594128a11971b98e8',
    },
    {
      name: 'Unticked / Failed',
      link:
        'zpl://components?pid=6046a5e594128a11971b98e8&coids=60490eae01b6f5ba3d519a4b',
    },
    {
      name: 'Ticked / Hover',
      link:
        'zpl://components?pid=6046a5e594128a11971b98e8&coids=60491964469e5d088d24c804',
    },
    {
      name: 'Ticked / Pristine',
      link:
        'zpl://components?pid=6046a5e594128a11971b98e8&coids=6046a8ab7b577511104d4c94',
    },
  ],
  badges: [Badges.DESIGN_LINKED],
};
