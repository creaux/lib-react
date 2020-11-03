import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  SignpostComponent,
  SignpostComponentProps,
  SignpostElement,
} from './signpost.component';
import { action } from '@storybook/addon-actions';
import { ImagePropsBuilder } from './image.props.builder';
import { Builder } from '../builder';

const props = Builder<SignpostComponentProps>()
  .elements([
    Builder<SignpostElement>()
      .image(
        new ImagePropsBuilder()
          .withSrc('https://picsum.photos/id/402/1600/1200')
          .withRounded(false)
          .build()
      )
      .over(
        new ImagePropsBuilder()
          .withSrc('https://picsum.photos/id/403/1600/1200')
          .withRounded(false)
          .build()
      )
      .title('First')
      .onClick(action('First'))
      .build(),
    Builder<SignpostElement>()
      .image(
        new ImagePropsBuilder()
          .withSrc('https://picsum.photos/id/405/1600/1200')
          .withRounded(false)
          .build()
      )
      .over(
        new ImagePropsBuilder()
          .withSrc('https://picsum.photos/id/406/1600/1200')
          .withRounded(false)
          .build()
      )
      .title('Second')
      .onClick(action('Second'))
      .build(),
    Builder<SignpostElement>()
      .image(
        new ImagePropsBuilder()
          .withSrc('https://picsum.photos/id/409/1600/1200')
          .withRounded(false)
          .build()
      )
      .over(
        new ImagePropsBuilder()
          .withSrc('https://picsum.photos/id/410/1600/1200')
          .withRounded(false)
          .build()
      )
      .title('Third')
      .onClick(action('Third'))
      .build(),
    Builder<SignpostElement>()
      .image(
        new ImagePropsBuilder()
          .withSrc('https://picsum.photos/id/411/1600/1200')
          .withRounded(false)
          .build()
      )
      .over(
        new ImagePropsBuilder()
          .withSrc('https://picsum.photos/id/412/1600/1200')
          .withRounded(false)
          .build()
      )
      .title('Fourth')
      .onClick(action('Fourth'))
      .build(),
  ])
  .build();

const story = storiesOf('Atomic Design/Moleculs/Signpost', module);

story.add('default', () => {
  return <SignpostComponent {...props} />;
});
