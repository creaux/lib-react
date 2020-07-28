import React from 'react';
import { storiesOf } from '@storybook/react';
import { Hero } from '../Hero';
import {
  PositionBuilder,
  Viewport,
  ViewportPropsBuilder,
} from '../Viewport/component';
import { Navigation } from '../navigation.component';
import { props as navigationProps } from '../navigation.mocks';
import { NavigationClaim } from '../navigation-claim.component';
import { NavigationButtons } from '../navigation-buttons.component';
import { props as buttonProps } from '../navigation-buttons.mocks';
import { NavigationBrand } from '../navigation-brand.component';
import { props as navigationBrandProps } from '../navigation-brand.mocks';
import { NavigationItems } from '../navigation-items.component';
import { props as navigationItemProps } from '../navigation-items.mocks';
import { PadContainer } from './container';
import { JUSTIFY_CONTENT } from '../../schema/justify-content.enum';
import { FIXED } from '../../schema/fixed.enum';

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
      <Navigation
        {...navigationProps}
        justifyContent={JUSTIFY_CONTENT.BETWEEN}
        fixed={FIXED.TOP}
      >
        <NavigationBrand {...navigationBrandProps} />
        <NavigationItems {...navigationItemProps} />
      </Navigation>
      <PadContainer>
        <Viewport {...ViewportProps.first}>
          <Hero {...heroProps} />
        </Viewport>
        <Viewport {...ViewportProps.second}>
          <Hero {...heroProps} />
        </Viewport>
        <Viewport {...ViewportProps.third}>
          <Hero {...heroProps} />
        </Viewport>
      </PadContainer>
      <Navigation
        {...navigationProps}
        justifyContent={JUSTIFY_CONTENT.BETWEEN}
        fixed={FIXED.BOTTOM}
      >
        <NavigationClaim>This is button navigation</NavigationClaim>
        <NavigationButtons {...buttonProps} />
      </Navigation>
    </>
  );
});
