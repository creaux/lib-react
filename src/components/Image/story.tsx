import React from 'react';
import { storiesOf } from '@storybook/react';
import { Image } from './component';
import { asBackgroundProps, asImgProps } from './mock';

storiesOf('Atoms/Image', module)
  .add('as img', () => <Image {...asImgProps} />)
  .add('as background', () => <Image {...asBackgroundProps} />);
