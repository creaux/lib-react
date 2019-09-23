import React from 'react';
import { storiesOf } from '@storybook/react';
import { Add } from './';
import { action } from '@storybook/addon-actions';
import Marked from 'storybook-readme/components/Marked';

const story = storiesOf('Moleculs/Add', module);

story.add('Documentation', () => (
  <div style={{ padding: '20px' }}>
    <Marked
      md={`
      # Add

      Component for adding particular count.

    `}
    />
    <Marked
      md={`
      ## Variants

      | Variant       | Description                             |
      | ------------- | --------------------------------------- |
      | NA            | NA                                      |
      
    `}
    />
    <Add title="Add" onAdd={action('Add clicked!')} />
  </div>
));

story.add('default', () => <Add title="Add" onAdd={action('Add clicked!')} />);
