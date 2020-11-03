import React, { FunctionComponent } from 'react';
import { I18n, Translations } from './i18n.component';
import {
  Collapsable,
  CollapsableElement,
  CollapsableProps,
} from './collapsable.component';
import { Headline, HeadlineProps } from './headline.component';
import { Builder } from '../builder';
import defaultTranslations from './questions.default.json';
import { Viewport, ViewportProps } from './viewport.component';
import { Color } from '../schema/color.enum';
import { Padding } from '../schema/padding.enum';

export interface QuestionsTranslations extends Translations {
  QUESTIONS_TITLE: string;
  QUESTIONS_PARAGRAPH: string;
  QUESTIONS_QUESTION_FIRST: string;
  QUESTIONS_ANSWER_FIRST: string;
  QUESTIONS_QUESTION_SECOND: string;
  QUESTIONS_ANSWER_SECOND: string;
  QUESTIONS_QUESTION_THIRD: string;
  QUESTIONS_ANSWER_THIRD: string;
  QUESTIONS_QUESTION_FOURTH: string;
  QUESTIONS_ANSWER_FOURTH: string;
  QUESTIONS_QUESTION_FIFTH: string;
  QUESTIONS_ANSWER_FIFTH: string;
  QUESTIONS_QUESTION_SIXTH: string;
  QUESTIONS_ANSWER_SIXTH: string;
}

export const Questions: FunctionComponent = () => {
  const viewportProps = Builder<ViewportProps>()
    .color(Color.DARK)
    .center(true)
    .padding(Padding.P4)
    .build();

  return (
    <Viewport {...viewportProps}>
      <I18n.Consumer<QuestionsTranslations>
        defaultTranslations={defaultTranslations}
      >
        {(translations) => {
          class Props {
            public static headline = Builder<HeadlineProps>()
              .title(translations.QUESTIONS_TITLE)
              .paragraph(translations.QUESTIONS_PARAGRAPH)
              .center(true)
              .absolute(false)
              .build();

            public static collapsable = Builder<CollapsableProps>()
              .elements([
                Builder<CollapsableElement>()
                  .title(translations.QUESTIONS_QUESTION_FIRST)
                  .description(translations.QUESTIONS_ANSWER_FIRST)
                  .build(),
                Builder<CollapsableElement>()
                  .title(translations.QUESTIONS_QUESTION_SECOND)
                  .description(translations.QUESTIONS_ANSWER_SECOND)
                  .build(),
                Builder<CollapsableElement>()
                  .title(translations.QUESTIONS_QUESTION_THIRD)
                  .description(translations.QUESTIONS_ANSWER_THIRD)
                  .build(),
                Builder<CollapsableElement>()
                  .title(translations.QUESTIONS_QUESTION_FOURTH)
                  .description(translations.QUESTIONS_ANSWER_FOURTH)
                  .build(),
                Builder<CollapsableElement>()
                  .title(translations.QUESTIONS_QUESTION_FIFTH)
                  .description(translations.QUESTIONS_ANSWER_FIFTH)
                  .build(),
                Builder<CollapsableElement>()
                  .title(translations.QUESTIONS_QUESTION_SIXTH)
                  .description(translations.QUESTIONS_ANSWER_SIXTH)
                  .build(),
              ])
              .build();
          }
          return (
            <>
              <Headline {...Props.headline} />
              <Collapsable {...Props.collapsable} />
            </>
          );
        }}
      </I18n.Consumer>
    </Viewport>
  );
};
