import {
  NavigationScreenContentLinkBuilder,
  NavigationScreenContentPropsBuilder,
} from './navigation-screen-content.builder';
import {
  NavigationItemBuilder,
  NavigationItemsPropsBuilder,
} from './navigation-items.props.builder';

export const navigationScreenContentProps = new NavigationScreenContentPropsBuilder()
  .withEmail('example@example.com')
  .withPhone('+44 777 778 888')
  .withCompany('Sample LTD')
  .withStreet('Downing street')
  .withStreetNo('256')
  .withCity('San Francisco')
  .withPostcode('123 12')
  .withLinks([
    new NavigationScreenContentLinkBuilder()
      .withHref('http://#')
      .withTitle('About')
      .build(),
    new NavigationScreenContentLinkBuilder()
      .withHref('http://#')
      .withTitle('Topics')
      .build(),
    new NavigationScreenContentLinkBuilder()
      .withHref('http://#')
      .withTitle('Terms')
      .build(),
    new NavigationScreenContentLinkBuilder()
      .withHref('http://#')
      .withTitle('Policy')
      .build(),
  ])
  .build();

export const navigationItems = new NavigationItemsPropsBuilder()
  .withItems([
    new NavigationItemBuilder()
      .withId('first')
      .withTitle('FIRST')
      .withLink('')
      .build(),
    new NavigationItemBuilder()
      .withId('second')
      .withTitle('SECOND')
      .withLink('')
      .build(),
    new NavigationItemBuilder()
      .withId('third')
      .withTitle('THIRD')
      .withLink('')
      .build(),
    new NavigationItemBuilder()
      .withId('fourth')
      .withTitle('FOURTH')
      .withLink('')
      .build(),
  ])
  .withActive(1)
  .build();

export const props = {};
