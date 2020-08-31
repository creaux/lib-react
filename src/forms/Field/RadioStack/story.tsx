import React from 'react';
import { storiesOf } from '@storybook/react';
import { RadioStack } from './component';
import { faWalking, faTruck } from '@fortawesome/free-solid-svg-icons';

export const props = {
  active: 'cdefghc',
  id: 'rthgfjslwp',
  onChange() {},
  radios: [
    {
      id: 'abcdefghc',
      icon: faWalking,
      title: 'Personal Handover',
    },
    {
      id: 'cdefghc',
      icon: faTruck,
      title: 'Home Delivery',
    },
  ],
};

storiesOf('Atomic Design/Atoms/forms/RadioStack', module).add('default', () => (
  <RadioStack {...props} />
));
