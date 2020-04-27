import React from 'react';
import { storiesOf } from '@storybook/react';
import { Viewport } from './component';
import { Hero } from '../Hero';

storiesOf('Atoms/Viewport', module).add('default', () => {
  const viewportProps = {
    background: 'https://picsum.photos/id/100/2500/1656',
    xPosition: {
      portrait: 'right',
      landscape: 'center',
      desktop: 'center'
    }
  };

  const heroProps = {
    position: {
      x: 24,
      y: 24,
    }
  };

  return <Viewport {...viewportProps}>
    <Hero {...heroProps} />
  </Viewport>;
});
