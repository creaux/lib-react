import React from 'react';
import { storiesOf } from '@storybook/react';
import { Image } from './image.component';
import { ImagePropsBuilder } from './image.props.builder';
import { ImageVariants } from './image.types';
import {
  BreakpointCoordinatesBuilder,
  CoordinatesBuilder,
} from '../../../breakpoint-coordinates.builder';
import { createKind, Kinds } from '../../../structure.enum';

const imagePropsAsImage = new ImagePropsBuilder()
  .withSrc('https://picsum.photos/id/251/640/480')
  .withAlt('Lorem ipsum')
  .withVariant(ImageVariants.SOLID)
  .build();

const imagePropsAsBackground = new ImagePropsBuilder()
  .withSrc('https://picsum.photos/id/251/640/480')
  .withAlt('Lorem ipsum')
  .withVariant(ImageVariants.BACKGROUND)
  .build();

const imagePropsAsBackgroundWithPosition = new ImagePropsBuilder()
  .withSrc('https://picsum.photos/id/251/640/480')
  .withAlt('Lorem ipsum')
  .withVariant(ImageVariants.BACKGROUND)
  .withBackgroundPositions(
    new BreakpointCoordinatesBuilder()
      .withXs(new CoordinatesBuilder().withX('100px').withY('500px').build())
      .withSm(new CoordinatesBuilder().withX('100px').withY('500px').build())
      .withMd(new CoordinatesBuilder().withX('100px').withY('500px').build())
      .withLg(new CoordinatesBuilder().withX('100px').withY('500px').build())
      .withXl(new CoordinatesBuilder().withX('100px').withY('500px').build())
      .build()
  )
  .build();

const imagePropsAsBackgroundWithoutPosition = new ImagePropsBuilder()
  .withSrc('https://picsum.photos/id/251/640/480')
  .withAlt('Lorem ipsum')
  .withVariant(ImageVariants.BACKGROUND)
  .build();

const story = storiesOf(createKind(Kinds.BITS, 'Image'), module);

story.add('as img', () => <Image {...imagePropsAsImage} />);

story.add('as background', () => (
  <div style={{ width: '640px', height: '480px' }}>
    <Image {...imagePropsAsBackground} />
  </div>
));

story.add('as background with position', () => (
  <div style={{ width: '640px', height: '480px' }}>
    <Image {...imagePropsAsBackgroundWithPosition} />
    <Image {...imagePropsAsBackgroundWithoutPosition} />
  </div>
));
