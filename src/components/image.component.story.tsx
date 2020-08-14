import React from 'react';
import { storiesOf } from '@storybook/react';
import { ImageComponent } from './image.component';
import { asBackgroundProps, asImgProps } from './image.component.mock';

storiesOf('Atomic Design/Atoms/Image', module)
  .add('as img', () => <ImageComponent {...asImgProps} />)
  .add('as background', () => <ImageComponent {...asBackgroundProps} />);
