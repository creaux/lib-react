import React, { FunctionComponent } from 'react';
import { SignpostComponent, SignpostElement } from './signpost.component';
import { I18n, Translations } from './i18n.component';
import defaultTranslations from './placard.default.json';

export interface PlacardTranslations extends Translations {
  PLACARD_FIRST_TITLE: string;
  PLACARD_SECOND_TITLE: string;
  PLACARD_THIRD_TITLE: string;
  PLACARD_FOURTH_TITLE: string;
  PLACARD_LINK_TEXT: string;
}

export interface PlacardElement
  extends Omit<SignpostElement, 'title' | 'linkText'> {}

export interface PlacardProps {
  elements: [PlacardElement, PlacardElement, PlacardElement, PlacardElement];
}

export const Placard: FunctionComponent<PlacardProps> = ({ elements }) => {
  const translations: IterableIterator<string> = I18n.useTranslations(
    defaultTranslations
  ).values();
  const result: SignpostElement[] = elements.map((element, i) => ({
    ...element,
    title: translations.next().value as string,
  }));
  const linkText = translations.next().value;
  return <SignpostComponent elements={result} linkText={linkText} />;
};
