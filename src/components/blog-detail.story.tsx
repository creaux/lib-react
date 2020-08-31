import React from 'react';
import { storiesOf } from '@storybook/react';
import { Detail } from './blog-detail.component';

storiesOf('Atomic Design/Organisms/Blog/Detail', module).add('default', () => {
  const props = {};
  return <Detail {...props} />;
});
