import React from 'react';
import { Alpha } from './component';
import { Form, FormProps } from '../../../Form/component';
import { Builder } from '../../../../builder';
import { Meta, Story } from '@storybook/react/types-6-0';
import {
  FunctionalityDesignKind,
  createFunctionalityDesign,
} from '../../../../components/structure.enum';
import { FieldOuterProps } from '../../types';
import * as FormStories from '../../../Form/story';
import { Badges } from '../../../../badges.enum';

export default Builder<Meta>()
  .title(createFunctionalityDesign(FunctionalityDesignKind.BITS, 'Form/Alpha'))
  .component(Alpha)
  .subcomponents({ Form })
  .build();

interface Args {
  field: FieldOuterProps;
  form: FormProps;
}

const Template: Story<Args> = ({ form, field }) => (
  <FormStories.Normal {...(form as FormProps)}>
    <Alpha {...field} />
  </FormStories.Normal>
);

const field = Builder<FieldOuterProps>()
  .placeholder('Please fill some alpha.')
  .id('alpha')
  .label('alpha')
  .onChange(() => {})
  .value('')
  .onValidChange(() => {})
  .messages([
    'Text is correct',
    'Please fill valid alpha.',
    'Please fill some alpha',
  ])
  .disabled(false)
  .build();

export const Normal = Template.bind({});

Normal.args = {
  form: FormStories.Normal.args as FormProps,
  field,
};

export const Onplace = Template.bind({});

Onplace.args = {
  form: FormStories.Onplace.args as FormProps,
  field,
};

export const Inline = Template.bind({});

Inline.args = {
  form: FormStories.Inline.args as FormProps,
  field,
};

export const Floating = Template.bind({});

Floating.args = {
  form: FormStories.Floating.args as FormProps,
  field,
};

Floating.parameters = {
  zeplinLink: [
    {
      name: 'Pristine',
      link:
        'zpl://components?coids=60490d30dfcfbb0665cf2d9f&pid=6046a5e594128a11971b98e8',
    },
    {
      name: 'Focus',
      link:
        'zpl://components?coids=60490d309c866b1058958468&pid=6046a5e594128a11971b98e8',
    },
    {
      name: 'Success',
      link:
        'zpl://components?pid=6046a5e594128a11971b98e8&coids=60490d30630a21a144324269',
    },
    {
      name: 'Failed',
      link:
        'zpl://components?coids=60490d30091c11b98208e2a4&pid=6046a5e594128a11971b98e8',
    },
    {
      name: 'Hover',
      link:
        'zpl://components?pid=6046a5e594128a11971b98e8&coids=60490d30a2d7a4052a3ebd52',
    },
  ],
  badges: [Badges.DESIGN_PROVIDED],
};
