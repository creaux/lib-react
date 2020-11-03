import React, { FunctionComponent, ReactElement } from 'react';
import { Navigation, NavigationProps } from './navigation.component';
import {
  NavigationBrand,
  NavigationBrandProps,
} from './navigation-brand.component';
import {
  NavigationItem,
  NavigationItems,
  NavigationItemsProps,
} from './navigation-items.component';
import {
  NavigationButtons,
  NavigationButtonsProps,
} from './navigation-buttons.component';
import { NavigationToggler } from './navigation-toggler.component';
import {
  NavigationScreen,
  NavigationScreenProps,
} from './navigation-screen.component';
import {
  NavigationScreenContent,
  NavigationScreenContentLink,
  NavigationScreenContentProps,
} from './navigation-screen-content.component';
import { Builder } from '../builder';
import { BackgroundColor } from '../schema/background-color.enum';
import { Fixed } from '../schema/fixed.enum';
import { JustifyContent } from '../schema/justify-content.enum';
import { RenderProps } from './render.component';
import { Translations, I18n } from './i18n.component';
import { ButtonProps } from '../forms/Button';
import defaultTranslations from './navbar.default.json';

export interface NavbarTranslations extends Translations {
  NAVBAR_LINK_FIRST: string;
  NAVBAR_LINK_SECOND: string;
  NAVBAR_LINK_THIRD: string;
  NAVBAR_LINK_FOURTH: string;
  NAVBAR_CONTENT_EMAIL: string;
  NAVBAR_CONTENT_COMPANY: string;
  NAVBAR_CONTENT_CITY: string;
  NAVBAR_CONTENT_PHONE: string;
  NAVBAR_CONTENT_LINK_FIRST: string;
  NAVBAR_CONTENT_LINK_SECOND: string;
  NAVBAR_CONTENT_LINK_THIRD: string;
  NAVBAR_CONTENT_POSTCODE: string;
  NAVBAR_CONTENT_STREET: string;
  NAVBAR_CONTENT_STREET_NO: string;
  NAVBAR_BUTTON: string;
}

export interface NavbarProps {
  dark: boolean;
  brandLink: string;
  primaryLinks: [string, string, string, string];
  arePrimaryLinks: boolean;
  secondaryLinks: [string, string, string];
  brand: ReactElement<RenderProps>;
  onNavigate: (link: string) => void;
  areButtons: boolean;
  onButtonClick: (event: any) => void;
}

export const Navbar: FunctionComponent<NavbarProps> = ({
  dark,
  primaryLinks,
  arePrimaryLinks,
  secondaryLinks,
  brand,
  onNavigate: handleNavigate,
  brandLink,
  areButtons,
  onButtonClick: handleButtonClick,
}) => {
  const translations: Map<string, string> = I18n.useTranslations<
    NavbarTranslations
  >(defaultTranslations);

  const navigation = Builder<NavigationProps>()
    .background(dark ? BackgroundColor.DARK : BackgroundColor.LIGHT)
    .fixed(Fixed.TOP)
    .opacity(0)
    .justifyContent(JustifyContent.BETWEEN)
    .build();

  const brandProps: NavigationBrandProps = Builder<NavigationBrandProps>()
    .onClick(handleNavigate)
    .link(brandLink)
    .children(brand)
    .build();

  const items = Builder<NavigationItemsProps>()
    .items([
      Builder<NavigationItem>()
        .title(translations.get('NAVBAR_LINK_FIRST') as string)
        .link(primaryLinks[0])
        .build(),
      Builder<NavigationItem>()
        .title(translations.get('NAVBAR_LINK_SECOND') as string)
        .link(primaryLinks[1])
        .build(),
      Builder<NavigationItem>()
        .title(translations.get('NAVBAR_LINK_THIRD') as string)
        .link(primaryLinks[2])
        .build(),
      Builder<NavigationItem>()
        .title(translations.get('NAVBAR_LINK_FOURTH') as string)
        .link(primaryLinks[3])
        .build(),
    ])
    .onClick(handleNavigate)
    .build();

  const buttons = Builder<NavigationButtonsProps>()
    .buttons([
      Builder<ButtonProps>()
        .children(translations.get('NAVBAR_BUTTON') as string)
        .onClick(handleButtonClick)
        .build(),
    ])
    .build();

  const screen = Builder<NavigationScreenProps>().isOpen(false).build();

  const content = Builder<NavigationScreenContentProps>()
    .email(translations.get('NAVBAR_CONTENT_EMAIL') as string)
    .city(translations.get('NAVBAR_CONTENT_CITY') as string)
    .company(translations.get('NAVBAR_CONTENT_COMPANY') as string)
    .phone(translations.get('NAVBAR_CONTENT_PHONE') as string)
    .postcode(translations.get('NAVBAR_CONTENT_POSTCODE') as string)
    .street(translations.get('NAVBAR_CONTENT_STREET') as string)
    .streetNo(translations.get('NAVBAR_CONTENT_STREET_NO') as string)
    .links([
      Builder<NavigationScreenContentLink>()
        .href(secondaryLinks[0])
        .title(translations.get('NAVBAR_CONTENT_LINK_FIRST') as string)
        .build(),
      Builder<NavigationScreenContentLink>()
        .href(secondaryLinks[1])
        .title(translations.get('NAVBAR_CONTENT_LINK_SECOND') as string)
        .build(),
      Builder<NavigationScreenContentLink>()
        .href(secondaryLinks[2])
        .title(translations.get('NAVBAR_CONTENT_LINK_THIRD') as string)
        .build(),
    ])
    .onClick(handleNavigate)
    .build();

  return (
    <Navigation {...navigation}>
      <NavigationBrand {...brandProps} />
      {arePrimaryLinks ? <NavigationItems {...items} /> : null}
      {areButtons ? <NavigationButtons {...buttons} /> : null}
      <NavigationToggler />
      <NavigationScreen {...screen}>
        <NavigationScreenContent {...content} />
      </NavigationScreen>
    </Navigation>
  );
};
