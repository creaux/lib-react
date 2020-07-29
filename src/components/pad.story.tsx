import React from 'react';
import { storiesOf } from '@storybook/react';
import { Hero } from './Hero/index';
import {
  PositionBuilder,
  Viewport,
  ViewportPropsBuilder,
} from './Viewport/component';
import { Pad } from './pad.component';

class ViewportProps {
  private static position = new PositionBuilder()
    .withPortrait('right')
    .withLandscape('center')
    .withDesktop('center')
    .build();

  private static props = new ViewportPropsBuilder().withXPosition(
    ViewportProps.position
  );

  static readonly first = ViewportProps.props
    .withBackground('https://picsum.photos/id/100/2500/1656')
    .build();

  static readonly second = ViewportProps.props
    .withBackground('https://picsum.photos/id/101/2500/1656')
    .build();

  static readonly third = ViewportProps.props
    .withBackground('https://picsum.photos/id/102/2500/1656')
    .build();

  static readonly fourth = ViewportProps.props
    .withBackground('https://picsum.photos/id/103/2500/1656')
    .build();
}

storiesOf('Organisms/Pad', module).add('default', () => {
  const heroProps = {
    position: {
      x: 24,
      y: 24,
    },
  };

  return (
    <>
      <Pad>
        <Viewport {...ViewportProps.first}>
          <Hero {...heroProps} />
        </Viewport>
        <Viewport {...ViewportProps.second}>
          <Hero {...heroProps} />
        </Viewport>
        <Viewport {...ViewportProps.third}>
          <Hero {...heroProps} />
        </Viewport>
        <Viewport {...ViewportProps.fourth}>
          <Hero {...heroProps} />
        </Viewport>
      </Pad>
    </>
  );
});
