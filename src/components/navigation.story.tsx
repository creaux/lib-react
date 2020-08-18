import React from 'react';
import { storiesOf } from '@storybook/react';
import { Navigation, NavigationScheme } from './navigation.component';
import { props } from './navigation.mocks';
import { NavigationBrand } from './navigation-brand.component';
import { props as navigationBrandProps } from './navigation-brand.mocks';
import { NavigationItems } from './navigation-items.component';
import { props as itemsProps } from './navigation-items.mocks';
import { NavigationButtons } from './navigation-buttons.comp\onent';
import { props as buttonProps } from './navigation-buttons.mocks';
import { NavigationClaim } from './navigation-claim.component';
import { JustifyContent } from '../schema/justify-content.enum';
import { Fixed } from '../schema/fixed.enum';
import { NavigationToggler } from './navigation-toggler.component';
import { NavigationScreen } from './navigation-screen.component';
import { NavigationScreenContent } from './navigation-screen-content.component';
import {
  NavigationScreenContentLinkBuilder,
  NavigationScreenContentPropsBuilder,
} from './navigation-screen-content.builder';
import { Viewport } from './viewport.component';
import { NavigationPropsBuilder } from './navigation.props.builder';
import { ViewportPropsBuilder } from './viewport-props.builder';
import {
  NavigationItemBuilder,
  NavigationItemsPropsBuilder,
} from './navigation-items.props.builder';

const viewportProps = new ViewportPropsBuilder()
  .withBackground('https://picsum.photos/id/450/1600/1200')
  .build();

const story = storiesOf('Atomic Design/Moleculs/Navigation', module);

story.add('default', () => {
  return (
    <Viewport {...viewportProps}>
      <Navigation>
        <NavigationBrand {...navigationBrandProps} />
        <NavigationItems {...itemsProps} />
      </Navigation>
    </Viewport>
  );
});

story.add('light', () => {
  const props = new NavigationPropsBuilder()
    .withNavigationScheme(NavigationScheme.LIGHT)
    .build();
  return (
    <Viewport {...viewportProps}>
      <Navigation {...props}>
        <NavigationBrand {...navigationBrandProps} />
        <NavigationItems {...itemsProps} />
      </Navigation>
    </Viewport>
  );
});

story.add('dark', () => {
  const props = new NavigationPropsBuilder()
    .withNavigationScheme(NavigationScheme.DARK)
    .build();
  return (
    <Viewport {...viewportProps}>
      <Navigation {...props}>
        <NavigationBrand {...navigationBrandProps} />
        <NavigationItems {...itemsProps} />
      </Navigation>
    </Viewport>
  );
});

story.add('light opacity', () => {
  const props = new NavigationPropsBuilder()
    .withNavigationScheme(NavigationScheme.LIGHT)
    .withOpacity(0.2)
    .build();
  return (
    <Viewport {...viewportProps}>
      <Navigation {...props}>
        <NavigationBrand {...navigationBrandProps} />
        <NavigationItems {...itemsProps} />
      </Navigation>
    </Viewport>
  );
});

story.add('dark opacity', () => {
  const props = new NavigationPropsBuilder()
    .withOpacity(0.2)
    .withNavigationScheme(NavigationScheme.DARK)
    .build();
  return (
    <Viewport {...viewportProps}>
      <Navigation {...props}>
        <NavigationBrand {...navigationBrandProps} />
        <NavigationItems {...itemsProps} />
      </Navigation>
    </Viewport>
  );
});

story.add('buttons', () => {
  return (
    <Viewport {...viewportProps}>
      <Navigation
        {...props}
        justifyContent={JustifyContent.BETWEEN}
        fixed={Fixed.BOTTOM}
        opacity={0.5}
      >
        <NavigationClaim>This is claim in navigation</NavigationClaim>
        <NavigationButtons {...buttonProps} />
      </Navigation>
    </Viewport>
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

const navigationItems = new NavigationItemsPropsBuilder()
  .withItems([
    new NavigationItemBuilder()
      .withId('pure')
      .withTitle('Pure')
      .withLink('/pure')
      .build(),
    new NavigationItemBuilder()
      .withId('romance')
      .withTitle('Romance')
      .withLink('/romance')
      .build(),
    new NavigationItemBuilder()
      .withId('luxury')
      .withTitle('Luxury')
      .withLink('/luxury')
      .build(),
    new NavigationItemBuilder()
      .withId('passion')
      .withTitle('Passion')
      .withLink('/passion')
      .build(),
  ])
  .build();

story.add('toggler', () => {
  return (
    <Viewport {...viewportProps}>
      <Navigation justifyContent={JustifyContent.BETWEEN} opacity={0}>
        <NavigationBrand {...navigationBrandProps} />
        <NavigationItems {...navigationItems} />
        <NavigationToggler />
        <NavigationScreen>
          <NavigationScreenContent {...navigationScreenContentProps} />
        </NavigationScreen>
      </Navigation>
    </Viewport>
  );
});
