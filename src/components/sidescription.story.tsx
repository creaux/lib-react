import React from 'react';
import { storiesOf } from '@storybook/react';
import { Sidescription } from './sidescription.component';
import { action } from '@storybook/addon-actions';

storiesOf('Atomic Design/Atoms/Sidescription', module).add('default', () => {
  const props = {
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet si',
    onAdd: action('Clicked Add!'),
    subtitle: 'Good one',
  };
  return <Sidescription {...props} />;
});
