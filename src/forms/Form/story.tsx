import { Meta, Story } from '@storybook/react';
import { Builder } from '../../builder';
import {
  createFunctionalityDesign,
  FunctionalityDesignKind,
} from '../../components/structure.enum';
import { Form, FormProps, FormType } from './component';

export default Builder<Meta>()
  .title(createFunctionalityDesign(FunctionalityDesignKind.BITS, 'Form/Form'))
  .component(Form)
  .build();

const Template: Story<FormProps> = (args) => <Form {...args} />;

export const Normal = Template.bind({});

Normal.args = Builder<FormProps>()
  .onSubmit(() => {})
  .type(FormType.NORMAL)
  .build();

export const Onplace = Template.bind({});

Onplace.args = Builder<FormProps>()
  .onSubmit(() => {})
  .type(FormType.ONPLACE)
  .build();

export const Inline = Template.bind({});

Inline.args = Builder<FormProps>()
  .onSubmit(() => {})
  .type(FormType.INLINE)
  .build();

export const Floating = Template.bind({});

Floating.args = Builder<FormProps>()
  .onSubmit(() => {})
  .type(FormType.FLOATING)
  .build();
