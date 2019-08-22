import React from 'react';
import { storiesOf } from '@storybook/react';
import { Detail } from './component';
import { withInfo } from '@storybook/addon-info';

storiesOf('Organisms/Blog/Detail', module)
  .addDecorator(withInfo({ header: false }))
  .add('default', () => {
    const props = {};
    return <Detail {...props} />;
  });
