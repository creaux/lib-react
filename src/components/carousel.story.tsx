import React from 'react';
import { storiesOf } from '@storybook/react';
import { Carousel } from './carousel.component';
import { mocks } from './carousel.mocks';

const story = storiesOf('Moleculs/Carousel', module);
const typings = story;

typings.add('multi', () => <Carousel {...mocks.multi} />);

typings.add('simple', () => <Carousel {...mocks.simple} />);
