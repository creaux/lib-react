import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Builder } from '../builder';
import { Modal, ModalProps } from './modal';

export default Builder<Meta>()
  .title('Atomic Design/Organisms/Modal')
  .component(Modal)
  .build();

const Template: Story<ModalProps> = (args) => {
  return <Modal {...args} />;
};

export const Default = Template.bind({});

Default.args = Builder<ModalProps>()
  .onConfirm(() => {})
  .onCancel(() => {})
  .build();
