import React from 'react';
import { storiesOf } from '@storybook/react';
import { Navigation, NAVIGATION_SCHEME } from './navigation.component';
import { props } from './navigation.mocks';
import { NavigationBrand } from './navigation-brand.component';
import { props as navigationBrandProps } from './navigation-brand.mocks';
import { NavigationItems } from './navigation-items.component';
import { props as itemsProps } from './navigation-items.mocks';
import { NavigationButtons } from './navigation-buttons.component';
import { props as buttonProps } from './navigation-buttons.mocks';
import { NavigationClaim } from './navigation-claim.component';
import { JUSTIFY_CONTENT } from '../schema/justify-content.enum';
import { FIXED } from '../schema/fixed.enum';
import { NavigationToggler } from './navigation-toggler.component';
import { NavigationScreen } from './navigation-screen.component';
import { NavigationScreenContent } from './navigation-screen-content.component';
import {
  NavigationScreenContentLinkBuilder,
  NavigationScreenContentPropsBuilder,
} from './navigation-screen-content.builder';
import { Viewport } from './viewport.component';

const story = storiesOf('Moleculs/Navigation', module);

story.add('default', () => {
  return (
    <Navigation {...props}>
      <NavigationBrand {...navigationBrandProps} />
      <NavigationItems {...itemsProps} />
    </Navigation>
  );
});

story.add('buttons', () => {
  return (
    <Navigation
      {...props}
      justifyContent={JUSTIFY_CONTENT.BETWEEN}
      fixed={FIXED.BOTTOM}
      opacity={0.5}
    >
      <NavigationClaim>This is claim in navigation</NavigationClaim>
      <NavigationButtons {...buttonProps} />
    </Navigation>
  );
});

const navigationScreenContentProps = new NavigationScreenContentPropsBuilder()
  .withEmail('ahoj@nekdo.cz')
  .withPhone('9999')
  .withCompany('Corporation')
  .withStreet('Zelena')
  .withStreetNo('256')
  .withCity('San Francisco')
  .withPostcode('123 12')
  .withLinks([
    new NavigationScreenContentLinkBuilder()
      .withHref('http://#')
      .withTitle('Products')
      .build(),
    new NavigationScreenContentLinkBuilder()
      .withHref('http://#')
      .withTitle('About')
      .build(),
    new NavigationScreenContentLinkBuilder()
      .withHref('http://#')
      .withTitle('Conditions')
      .build(),
    new NavigationScreenContentLinkBuilder()
      .withHref('http://#')
      .withTitle('Privacy Policy')
      .build(),
  ])
  .build();

story.add('toggler', () => {
  return (
    <Viewport backgroundImage="https://picsum.photos/id/450/1600/1200">
      <Navigation justifyContent={JUSTIFY_CONTENT.BETWEEN} opacity={0.00001}>
        <NavigationBrand {...navigationBrandProps} />
        <NavigationToggler />
        <NavigationScreen>
          <NavigationScreenContent {...navigationScreenContentProps} />
        </NavigationScreen>
      </Navigation>
    </Viewport>
  );
});
