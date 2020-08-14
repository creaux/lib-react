import React from 'react';
import { storiesOf } from '@storybook/react';
import { Viewport } from './viewport.component';
import { Pad } from './pad.component';
import { Headline } from './headline.component';
import { HeadlinePropsBuilder } from './headline-props.builder';
import { ViewportPropsBuilder } from './viewport-props.builder';
import {
  BreakpointCoordinatesBuilder,
  CoordinatesBuilder,
} from './map-breakpoint-coordinates-to-style.builder';

class ViewportProps {
  private static coordinates = new BreakpointCoordinatesBuilder()
    .withXs(new CoordinatesBuilder().withX('right').withY('center'))
    .withSm(new CoordinatesBuilder().withX('right').withY('center'))
    .withMd(new CoordinatesBuilder().withX('right').withY('center'))
    .withLg(new CoordinatesBuilder().withX('right').withY('center'))
    .withXl(new CoordinatesBuilder().withX('right').withY('center'))
    .build();

  private static props = new ViewportPropsBuilder().withBreakpointCoordinates(
    ViewportProps.coordinates
  );

  static readonly first = ViewportProps.props
    .withBackground('https://picsum.photos/id/100/2500/1656')
    .build();

  static readonly second = ViewportProps.props
    .withBackground('https://picsum.photos/id/101/2500/1656')
    .build();

  static readonly third = ViewportProps.props
    .withBackground('https://picsum.photos/id/102/2500/1656')
    .build();

  static readonly fourth = ViewportProps.props
    .withBackground('https://picsum.photos/id/103/2500/1656')
    .build();
}

export class HeadlineProps {
  public static first = new HeadlinePropsBuilder()
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

  public static second = new HeadlinePropsBuilder()
    .withTitle('Second')
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

  public static third = new HeadlinePropsBuilder()
    .withTitle('Third')
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

  public static fourth = new HeadlinePropsBuilder()
    .withTitle('Fourth')
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
}

storiesOf('Atomic Design/Organisms/Pad', module).add('default', () => {
  return (
    <>
      <Pad>
        <Viewport {...ViewportProps.first}>
          <Headline {...HeadlineProps.first} />
        </Viewport>
        <Viewport {...ViewportProps.second}>
          <Headline {...HeadlineProps.second} />
        </Viewport>
        <Viewport {...ViewportProps.third}>
          <Headline {...HeadlineProps.third} />
        </Viewport>
        <Viewport {...ViewportProps.fourth}>
          <Headline {...HeadlineProps.fourth} />
        </Viewport>
      </Pad>
    </>
  );
});
