import React from 'react';
import { storiesOf } from '@storybook/react';
import { Viewport, ViewportProps } from './viewport.component';
import { Headline } from './headline.component';
import { HeadlinePropsBuilder } from './headline-props.builder';
import { ViewportPropsBuilder } from './viewport-props.builder';
import {
  BreakpointCoordinatesBuilder,
  CoordinatesBuilder,
} from './map-breakpoint-coordinates-to-style.builder';

storiesOf('Atomic Design/Atoms/Viewport', module).add('default', () => {
  const viewportProps: ViewportProps = new ViewportPropsBuilder()
    .withBackground('https://picsum.photos/id/100/2500/1656')
    .withBreakpointCoordinates(
      new BreakpointCoordinatesBuilder()
        .withXs(new CoordinatesBuilder().withX('right').withY('center'))
        .withSm(new CoordinatesBuilder().withX('right').withY('center'))
        .withMd(new CoordinatesBuilder().withX('right').withY('center'))
        .withLg(new CoordinatesBuilder().withX('right').withY('center'))
        .withXl(new CoordinatesBuilder().withX('right').withY('center'))
        .build()
    )
    .build();

  const headlineProps = new HeadlinePropsBuilder()
    .withTitle('First')
    .withParagraph('Cobaltum persuaderes, tanquam fortis habitio.')
    .withBreakpointCoordinates(
      new BreakpointCoordinatesBuilder()
        .withXs(new CoordinatesBuilder().withX('right').withY('center'))
        .withSm(new CoordinatesBuilder().withX('right').withY('center'))
        .withMd(new CoordinatesBuilder().withX('right').withY('center'))
        .withLg(new CoordinatesBuilder().withX('right').withY('center'))
        .withXl(new CoordinatesBuilder().withX('right').withY('center'))
        .build()
    );

  return (
    <Viewport {...viewportProps}>
      <Headline {...headlineProps} />
    </Viewport>
  );
});
