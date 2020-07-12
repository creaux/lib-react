import React from 'react';
import { storiesOf } from '@storybook/react';
import { Navigation } from './component';
import { props } from './mocks';
import { NavigationBrand } from '../NavigationBrand';
import { props as navigationBrandProps } from '../NavigationBrand/mock';
import { NavigationItems } from '../NavigationItems';
import { props as itemsProps } from '../NavigationItems/mock';
import { NavigationButtons } from '../NavigationButtons';
import { props as buttonProps } from '../NavigationButtons/mock';
import { NavigationClaim } from '../NavigationClaim';

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
    <Navigation {...props} className="justify-content-between fixed-bottom">
      <NavigationClaim>This is button navigation</NavigationClaim>
      <NavigationButtons {...buttonProps} />
    </Navigation>
  );
});
