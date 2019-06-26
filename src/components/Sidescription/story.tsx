import React from 'react';
import { storiesOf } from '@storybook/react';
import { Sidescription } from '.';
// import { withDocs } from 'storybook-readme';
// import README from './README.md';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

storiesOf('Atoms/Sidescription', module)
  .addDecorator(withInfo({ header: false }))
  // .addDecorator(withDocs([README]))
  .add('default', () => {
    const props = {
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet si',
      onAdd: action('Clicked Add!'),
      subtitle: 'Good one'
    };
    return <Sidescription {...props} />;
  });
