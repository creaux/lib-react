import React from 'react';
import { storiesOf } from '@storybook/react';
import { Dots } from './dots.component';

const dotsStory = storiesOf('Atoms/Dots', module);

dotsStory.add('default', () => (
  <Dots count={3} active={1} onDot={console.log} />
));
