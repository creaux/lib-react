import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  SignpostComponent,
  SignpostElementBuilder,
  SignpostComponentPropsBuilder,
} from './signpost.component';
import { ImageComponentPropsBuilder as ImagePropsBuilder } from './image.component';
import { action } from '@storybook/addon-actions';

const props = new SignpostComponentPropsBuilder()
  .withElements([
    new SignpostElementBuilder()
      .withImage(
        new ImagePropsBuilder()
          .withSrc('https://picsum.photos/1024/768?random=1')
          .withRounded(false)
          .build()
      )
      .withOver(
        new ImagePropsBuilder()
          .withSrc('https://picsum.photos/1024/768?random=5')
          .withRounded(false)
          .build()
      )
      .withTitle('First')
      .withOnClick(action('First'))
      .build(),
    new SignpostElementBuilder()
      .withImage(
        new ImagePropsBuilder()
          .withSrc('https://picsum.photos/1024/768?random=2')
          .withRounded(false)
          .build()
      )
      .withOver(
        new ImagePropsBuilder()
          .withSrc('https://picsum.photos/1024/768?random=6')
          .withRounded(false)
          .build()
      )
      .withTitle('Second')
      .withOnClick(action('Second'))
      .build(),
    new SignpostElementBuilder()
      .withImage(
        new ImagePropsBuilder()
          .withSrc('https://picsum.photos/1024/768?random=3')
          .withRounded(false)
          .build()
      )
      .withOver(
        new ImagePropsBuilder()
          .withSrc('https://picsum.photos/1024/768?random=7')
          .withRounded(false)
          .build()
      )
      .withTitle('Third')
      .withOnClick(action('Third'))
      .build(),
    new SignpostElementBuilder()
      .withImage(
        new ImagePropsBuilder()
          .withSrc('https://picsum.photos/1024/768?random=4')
          .withRounded(false)
          .build()
      )
      .withOver(
        new ImagePropsBuilder()
          .withSrc('https://picsum.photos/1024/768?random=8')
          .withRounded(false)
          .build()
      )
      .withTitle('Fourth')
      .withOnClick(action('Fourth'))
      .build(),
  ])
  .build();

const story = storiesOf('Moleculs/Signpost', module);

story.add('default', () => {
  return <SignpostComponent {...props} />;
});
