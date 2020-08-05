import React from 'react';
import { storiesOf } from '@storybook/react';
import { Viewport } from './viewport.component';
import { Headline } from './headline.component';
import {
  HeadlinePositionBuilder,
  HeadlinePositionsBuilder,
  HeadlinePropsBuilder,
} from './headline-props.builder';

storiesOf('Atoms/Viewport', module).add('default', () => {
  const viewportProps = {
    background: 'https://picsum.photos/id/100/2500/1656',
    xPosition: {
      portrait: 'right',
      landscape: 'center',
      desktop: 'center',
    },
  };

  return (
    <Viewport {...viewportProps}>
      <Headline
        {...new HeadlinePropsBuilder()
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
          )}
      />
    </Viewport>
  );
});
