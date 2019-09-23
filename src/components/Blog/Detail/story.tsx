import React from 'react';
import { storiesOf } from '@storybook/react';
import { Detail } from './component';

storiesOf('Organisms/Blog/Detail', module).add('default', () => {
  const props = {};
  return <Detail {...props} />;
});
