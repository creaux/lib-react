import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  PositionBuilder,
  Viewport,
  ViewportPropsBuilder,
} from './Viewport/component';
import { Pad } from './pad.component';
import { Headline } from './headline.component';
import {
  HeadlinePositionBuilder,
  HeadlinePositionsBuilder,
  HeadlinePropsBuilder,
} from './headline-props.builder';

class ViewportProps {
  private static position = new PositionBuilder()
    .withPortrait('right')
    .withLandscape('center')
    .withDesktop('center')
    .build();

  private static props = new ViewportPropsBuilder().withXPosition(
    ViewportProps.position
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
    .withPositions(
      new HeadlinePositionsBuilder()
        .withXs(new HeadlinePositionBuilder().withX(5).withY(5).build())
        .withSm(new HeadlinePositionBuilder().withX(5).withY(5).build())
        .withMd(new HeadlinePositionBuilder().withX(5).withY(5).build())
        .withLg(new HeadlinePositionBuilder().withX(5).withY(5).build())
        .withXl(new HeadlinePositionBuilder().withX(5).withY(5).build())
        .build()
    );

  public static second = new HeadlinePropsBuilder()
    .withTitle('Second')
    .withParagraph('Cobaltum persuaderes, tanquam fortis habitio.')
    .withPositions(
      new HeadlinePositionsBuilder()
        .withXs(new HeadlinePositionBuilder().withX(5).withY(5).build())
        .withSm(new HeadlinePositionBuilder().withX(5).withY(5).build())
        .withMd(new HeadlinePositionBuilder().withX(5).withY(5).build())
        .withLg(new HeadlinePositionBuilder().withX(5).withY(5).build())
        .withXl(new HeadlinePositionBuilder().withX(5).withY(5).build())
        .build()
    );

  public static third = new HeadlinePropsBuilder()
    .withTitle('Third')
    .withParagraph('Cobaltum persuaderes, tanquam fortis habitio.')
    .withPositions(
      new HeadlinePositionsBuilder()
        .withXs(new HeadlinePositionBuilder().withX(5).withY(5).build())
        .withSm(new HeadlinePositionBuilder().withX(5).withY(5).build())
        .withMd(new HeadlinePositionBuilder().withX(5).withY(5).build())
        .withLg(new HeadlinePositionBuilder().withX(5).withY(5).build())
        .withXl(new HeadlinePositionBuilder().withX(5).withY(5).build())
        .build()
    );

  public static fourth = new HeadlinePropsBuilder()
    .withTitle('Fourth')
    .withParagraph('Cobaltum persuaderes, tanquam fortis habitio.')
    .withPositions(
      new HeadlinePositionsBuilder()
        .withXs(new HeadlinePositionBuilder().withX(5).withY(5).build())
        .withSm(new HeadlinePositionBuilder().withX(5).withY(5).build())
        .withMd(new HeadlinePositionBuilder().withX(5).withY(5).build())
        .withLg(new HeadlinePositionBuilder().withX(5).withY(5).build())
        .withXl(new HeadlinePositionBuilder().withX(5).withY(5).build())
        .build()
    );
}

storiesOf('Organisms/Pad', module).add('default', () => {
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
