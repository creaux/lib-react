import React from 'react';
import { storiesOf } from '@storybook/react';
import { Markdown } from './markdown.component';
import markdown from './markdown.md';

storiesOf('Atomic Design/Atoms/Markdown', module).add('default', () => (
  <Markdown>{markdown}</Markdown>
));
