import React from 'react';
import { storiesOf } from '@storybook/react';
import { Carousel } from './component';
import HEADER from './markdown/HEADER.md';
import VARIANTS_HEADER from './markdown/VARIANTS_HEADER.md';
import VARIANTS_SIMPLE from './markdown/VARIANTS_SIMPLE.md';
import VARIANTS_MULTI from './markdown/VARIANTS_MULTI.md';
import { mocks } from './mocks';
import Marked from 'storybook-readme/components/Marked';

const story = storiesOf('Moleculs/Carousel', module);
const typings = story;

story.add('Documentation', () => (
  <div style={{ padding: '20px' }}>
    <Marked md={HEADER} />
    <Marked md={'<br />'} />
    <Marked md={VARIANTS_HEADER} />
    <Marked md={'<br />'} />
    <Marked md={VARIANTS_SIMPLE} />
    <Marked md={'<br />'} />
    <Carousel {...mocks.simple} />
    <Marked md={'<br />'} />
    <Marked md={VARIANTS_MULTI} />
    <Marked md={'<br />'} />
    <Carousel {...mocks.multi} />
  </div>
));

typings.add('multi', () => <Carousel {...mocks.multi} />);

typings.add('simple', () => <Carousel {...mocks.simple} />);
