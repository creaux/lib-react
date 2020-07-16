import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Signpost,
  SignpostElementBuilder,
  SignpostPropsBuilder
} from './component';
import { ImagePropsBuilder } from '../Image/component';

const props = new SignpostPropsBuilder()
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
      .build()
  ])
  .build();

const story = storiesOf('Moleculs/Signpost', module);

story.add('default', () => {
  return <Signpost {...props} />;
});
