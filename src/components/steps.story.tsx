import React from 'react';
import { storiesOf } from '@storybook/react';
import { Steps } from './steps.component';
import { action } from '@storybook/addon-actions';

export const props = {
  steps: ['Orders', 'Payment', 'Shipping'],
  active: 0,
};

storiesOf('Atomic Design/Moleculs/Steps', module).add('default', () => (
  <Steps {...props} onStep={() => action('Clicked on step.')} />
));
