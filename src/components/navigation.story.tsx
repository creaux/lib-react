import React from 'react';
import { storiesOf } from '@storybook/react';
import { Navigation } from './navigation.component';
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
