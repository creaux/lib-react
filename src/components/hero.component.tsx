import React, { FunctionComponent } from 'react';
import { Viewport, ViewportProps } from './viewport.component';
import { Headline, HeadlineProps } from './headline.component';
import { I18n, Translations } from './i18n.component';
import { Builder } from '../builder';
import defaultTranslations from './hero.default.json';
import { BreakpointValue } from './breakpoint-value.type';

export interface HeroTranslations extends Translations {
  HEADLINE_TITLE: string;
  HEADLINE_PARAGRAPH: string;
}

export type HeroHeadline = Pick<
  HeadlineProps,
  'breakpointCoordinates' | 'children'
>;
export type HeroViewport = Pick<
  ViewportProps,
  'breakpointCoordinates' | 'backgroundImage'
>;

export interface HeroProps {
  headline: HeroHeadline;
  viewport: HeroViewport;
}

export const Hero: FunctionComponent<HeroProps> = ({ headline, viewport }) => {
  return (
    <Viewport {...viewport}>
      <I18n.Consumer<HeroTranslations>
        defaultTranslations={defaultTranslations}
      >
        {(translations) => {
          const props = Builder<HeadlineProps>()
            .title(translations.HEADLINE_TITLE)
            .paragraph(translations.HEADLINE_PARAGRAPH)
            .children(headline.children)
            .breakpointWidth(Builder<BreakpointValue>().xs('100%').build())
            .breakpointCoordinates(headline.breakpointCoordinates)
            .build();
          return <Headline {...props} />;
        }}
      </I18n.Consumer>
    </Viewport>
  );
};
