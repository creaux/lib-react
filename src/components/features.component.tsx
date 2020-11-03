import React, { FunctionComponent, ReactNode } from 'react';
import { Headline, HeadlineProps } from './headline.component';
import { Aspects, AspectsProps } from './aspects.component';
import { I18n, Translations } from './i18n.component';
import defaultTranslations from './features.default.json';
import { Builder } from '../builder';
import { AspectProps } from './aspect.component';
import { Viewport, ViewportProps } from './viewport.component';
import { Color } from '../schema/color.enum';
import { Padding } from '../schema/padding.enum';

export interface FeaturesTranslations extends Translations {
  FEATURES_PAGE_TITLE: string;
  FEATURES_PAGE_PARAGRAPH: string;
  FEATURES_PAGE_FEATURE_FIRST_TITLE: string;
  FEATURES_PAGE_FEATURE_FIRST_DESCRIPTION: string;
  FEATURES_PAGE_FEATURE_SECOND_TITLE: string;
  FEATURES_PAGE_FEATURE_SECOND_DESCRIPTION: string;
  FEATURES_PAGE_FEATURE_THIRD_TITLE: string;
  FEATURES_PAGE_FEATURE_THIRD_DESCRIPTION: string;
  FEATURES_PAGE_FEATURE_FOURTH_TITLE: string;
  FEATURES_PAGE_FEATURE_FOURTH_DESCRIPTION: string;
  FEATURES_PAGE_FEATURE_FIFTH_TITLE: string;
  FEATURES_PAGE_FEATURE_FIFTH_DESCRIPTION: string;
  FEATURES_PAGE_FEATURE_SIXTH_TITLE: string;
  FEATURES_PAGE_FEATURE_SIXTH_DESCRIPTION: string;
}

export interface FeaturesProps {
  icons: [ReactNode, ReactNode, ReactNode, ReactNode, ReactNode, ReactNode];
}

export const Features: FunctionComponent<FeaturesProps> = ({ icons }) => {
  const viewportProps = Builder<ViewportProps>()
    .color(Color.DARK)
    .center(true)
    .padding(Padding.P4)
    .build();

  return (
    <Viewport {...viewportProps}>
      <I18n.Consumer<FeaturesTranslations>
        defaultTranslations={defaultTranslations}
      >
        {(translations) => {
          class Props {
            public static readonly headline = Builder<HeadlineProps>()
              .title(translations.FEATURES_PAGE_TITLE)
              .paragraph(translations.FEATURES_PAGE_PARAGRAPH)
              .absolute(false)
              .center(true)
              .build();

            public static readonly features = Builder<AspectsProps>()
              .aspects([
                Builder<AspectProps>()
                  .title(translations.FEATURES_PAGE_FEATURE_FIRST_TITLE)
                  .description(
                    translations.FEATURES_PAGE_FEATURE_FIRST_DESCRIPTION
                  )
                  .children(icons[0])
                  .build(),
                Builder<AspectProps>()
                  .title(translations.FEATURES_PAGE_FEATURE_SECOND_TITLE)
                  .description(
                    translations.FEATURES_PAGE_FEATURE_SECOND_DESCRIPTION
                  )
                  .children(icons[1])
                  .build(),
                Builder<AspectProps>()
                  .title(translations.FEATURES_PAGE_FEATURE_THIRD_TITLE)
                  .description(
                    translations.FEATURES_PAGE_FEATURE_THIRD_DESCRIPTION
                  )
                  .children(icons[2])
                  .build(),
                Builder<AspectProps>()
                  .title(translations.FEATURES_PAGE_FEATURE_FOURTH_TITLE)
                  .description(
                    translations.FEATURES_PAGE_FEATURE_FOURTH_DESCRIPTION
                  )
                  .children(icons[3])
                  .build(),
                Builder<AspectProps>()
                  .title(translations.FEATURES_PAGE_FEATURE_FIFTH_TITLE)
                  .description(
                    translations.FEATURES_PAGE_FEATURE_FIFTH_DESCRIPTION
                  )
                  .children(icons[4])
                  .build(),
                Builder<AspectProps>()
                  .title(translations.FEATURES_PAGE_FEATURE_SIXTH_TITLE)
                  .description(
                    translations.FEATURES_PAGE_FEATURE_SIXTH_DESCRIPTION
                  )
                  .children(icons[5])
                  .build(),
              ])
              .build();
          }

          return (
            <>
              <Headline {...Props.headline} />
              <Aspects {...Props.features} />
            </>
          );
        }}
      </I18n.Consumer>
    </Viewport>
  );
};
