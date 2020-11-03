import React from 'react';
import { storiesOf } from '@storybook/react';
import { Viewport, ViewportProps } from './viewport.component';
import { Pad } from './pad.component';
import { Headline, HeadlineProps } from './headline.component';
import { HeadlinePropsBuilder } from './headline-props.builder';
import { ViewportPropsBuilder } from './viewport-props.builder';
import {
  BreakpointCoordinatesBuilder,
  CoordinatesBuilder,
} from './breakpoint-coordinates.builder';
import { Builder } from '../builder';
import { Aspects, AspectsProps } from './aspects.component';
import { AspectProps } from './aspect.component';
import {
  Collapsable,
  CollapsableElement,
  CollapsableProps,
} from './collapsable.component';
import { Padding } from '../schema/padding.enum';
import {
  BsAwardFill,
  BsDisplayFill,
  BsFillBarChartFill,
  BsFillCursorFill,
} from 'react-icons/bs';

class ViewportPropsSingleton {
  private static coordinates = new BreakpointCoordinatesBuilder()
    .withXs(new CoordinatesBuilder().withX('right').withY('center'))
    .withSm(new CoordinatesBuilder().withX('right').withY('center'))
    .withMd(new CoordinatesBuilder().withX('right').withY('center'))
    .withLg(new CoordinatesBuilder().withX('right').withY('center'))
    .withXl(new CoordinatesBuilder().withX('right').withY('center'))
    .build();

  private static props = new ViewportPropsBuilder().withBreakpointCoordinates(
    ViewportPropsSingleton.coordinates
  );

  static readonly first = ViewportPropsSingleton.props
    .withBackground('https://picsum.photos/id/100/2500/1656')
    .build();

  static readonly second = ViewportPropsSingleton.props
    .withBackground('https://picsum.photos/id/101/2500/1656')
    .build();

  static readonly third = ViewportPropsSingleton.props
    .withBackground('https://picsum.photos/id/102/2500/1656')
    .build();

  static readonly fourth = ViewportPropsSingleton.props
    .withBackground('https://picsum.photos/id/103/2500/1656')
    .build();

  static readonly fifth = Builder<ViewportProps>().padding(Padding.P5).build();
}

export class HeadlinePropsSingleton {
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

  public static fifth = Builder<HeadlineProps>()
    .title('Lorem ipsum')
    .paragraph('Dolor sit amet')
    .center(true)
    .absolute(false)
    .build();
}

const featuresProps = Builder<AspectsProps>()
  .aspects([
    Builder<AspectProps>()
      .title('Lorem')
      .description('Ipsum')
      .children(<BsFillCursorFill />)
      .build(),
    Builder<AspectProps>()
      .title('Lorem')
      .description('Ipsum')
      .children(<BsFillBarChartFill />)
      .build(),
    Builder<AspectProps>()
      .title('Lorem')
      .description('Ipsum')
      .children(<BsAwardFill />)
      .build(),
    Builder<AspectProps>()
      .title('Lorem')
      .description('Ipsum')
      .children(<BsDisplayFill />)
      .build(),
  ])
  .build();

const collapsableProps = Builder<CollapsableProps>()
  .elements([
    Builder<CollapsableElement>()
      .title('Lorem ipsum dolor sit amet')
      .description(
        'Varius, teres fraticinidas interdum gratia de emeritis, dexter lacta.'
      )
      .build(),
    Builder<CollapsableElement>()
      .title('Deus moris, tanquam barbatus detrius.')
      .description('Nunquam gratia lactea.')
      .build(),
    Builder<CollapsableElement>()
      .title('A falsis, fuga domesticus onus.')
      .description('Nunquam visum gluten.')
      .build(),
    Builder<CollapsableElement>()
      .title('Fatalis candidatuss ducunt ad adelphis.')
      .description('Nunquam manifestum racana.')
      .build(),
  ])
  .build();

const stories = storiesOf('Atomic Design/Organisms/Pad', module);

stories.add('default', () => {
  return (
    <>
      <Pad>
        <Viewport {...ViewportPropsSingleton.first}>
          <Headline {...HeadlinePropsSingleton.first} />
        </Viewport>
        <Viewport {...ViewportPropsSingleton.second}>
          <Headline {...HeadlinePropsSingleton.second} />
        </Viewport>
        <Viewport {...ViewportPropsSingleton.third}>
          <Headline {...HeadlinePropsSingleton.third} />
        </Viewport>
        <Viewport {...ViewportPropsSingleton.fourth}>
          <Headline {...HeadlinePropsSingleton.fourth} />
        </Viewport>
      </Pad>
    </>
  );
});

stories.add('usecase', () => {
  return (
    <>
      <Pad>
        <Viewport {...ViewportPropsSingleton.first}>
          <Headline {...HeadlinePropsSingleton.first} />
        </Viewport>
        <Viewport {...ViewportPropsSingleton.second}>
          <Headline {...HeadlinePropsSingleton.second} />
        </Viewport>
        <Viewport {...ViewportPropsSingleton.fifth}>
          <Headline {...HeadlinePropsSingleton.fifth} />
          <Aspects {...featuresProps} />
        </Viewport>
        <Viewport {...ViewportPropsSingleton.fifth}>
          <Headline {...HeadlinePropsSingleton.fifth} />
          <Collapsable {...collapsableProps} />
        </Viewport>
      </Pad>
    </>
  );
});
