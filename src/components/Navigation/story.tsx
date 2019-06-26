import React from 'react';
import { storiesOf } from '@storybook/react';
import { Navigation } from './component';
import { props } from './mocks';

const story = storiesOf('Moleculs/Navigation', module);

story.add('default', () => {
  return <Navigation {...props} />;
});
