import React from 'react';
import { storiesOf } from '@storybook/react';
import { AddComponent as Add } from './add.component';
import { action } from '@storybook/addon-actions';

const story = storiesOf('Atomic Design/Moleculs/Add', module);

story.add('default', () => (
  <Add title="Add" onAdd={action('Add clicked!')} onCount={() => {}} />
));
