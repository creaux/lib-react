import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  SignpostComponent,
  SignpostComponentPropsBuilder,
  SignpostElementBuilder,
} from './signpost.component';
import { action } from '@storybook/addon-actions';
import { ImagePropsBuilder } from './image.props.builder';

const props = new SignpostComponentPropsBuilder()
  .withElements([
    new SignpostElementBuilder()
      .withImage(
        new ImagePropsBuilder()
          .withSrc('https://picsum.photos/id/402/1600/1200')
          .withRounded(false)
          .build()
      )
      .withOver(
        new ImagePropsBuilder()
          .withSrc('https://picsum.photos/id/403/1600/1200')
          .withRounded(false)
          .build()
      )
      .withTitle('First')
      .withOnClick(action('First'))
      .build(),
    new SignpostElementBuilder()
      .withImage(
        new ImagePropsBuilder()
          .withSrc('https://picsum.photos/id/405/1600/1200')
          .withRounded(false)
          .build()
      )
      .withOver(
        new ImagePropsBuilder()
          .withSrc('https://picsum.photos/id/406/1600/1200')
          .withRounded(false)
          .build()
      )
      .withTitle('Second')
      .withOnClick(action('Second'))
      .build(),
    new SignpostElementBuilder()
      .withImage(
        new ImagePropsBuilder()
          .withSrc('https://picsum.photos/id/409/1600/1200')
          .withRounded(false)
          .build()
      )
      .withOver(
        new ImagePropsBuilder()
          .withSrc('https://picsum.photos/id/410/1600/1200')
          .withRounded(false)
          .build()
      )
      .withTitle('Third')
      .withOnClick(action('Third'))
      .build(),
    new SignpostElementBuilder()
      .withImage(
        new ImagePropsBuilder()
          .withSrc('https://picsum.photos/id/411/1600/1200')
          .withRounded(false)
          .build()
      )
      .withOver(
        new ImagePropsBuilder()
          .withSrc('https://picsum.photos/id/412/1600/1200')
          .withRounded(false)
          .build()
      )
      .withTitle('Fourth')
      .withOnClick(action('Fourth'))
      .build(),
  ])
  .build();

const story = storiesOf('Atomic Design/Moleculs/Signpost', module);

story.add('default', () => {
  return <SignpostComponent {...props} />;
});
