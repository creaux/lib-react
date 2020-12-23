import '../src/themes/default/main.scss';
import { addParameters, addDecorator } from '@storybook/react';
import React from 'react';
import StorybookVRhythm from 'storybook-vrhythm';

addDecorator(StorybookVRhythm);

const cssReq = require.context('!!raw-loader!../src', true, /.\.css$/);
const cssTokenFiles = cssReq
  .keys()
  .map((filename) => ({ filename, content: cssReq(filename).default }));

const scssReq = require.context('!!raw-loader!../src', true, /.\.scss$/);
const scssTokenFiles = scssReq
  .keys()
  .map((filename) => ({ filename, content: scssReq(filename).default }));

const lessReq = require.context('!!raw-loader!../src', true, /.\.less$/);
const lessTokenFiles = lessReq
  .keys()
  .map((filename) => ({ filename, content: lessReq(filename).default }));

const svgIconsReq = require.context('!!raw-loader!../src', true, /.\.svg$/);
const svgIconTokenFiles = svgIconsReq
  .keys()
  .map((filename) => ({ filename, content: svgIconsReq(filename).default }));

addParameters({
  designToken: {
    files: {
      css: cssTokenFiles,
      scss: [...scssTokenFiles],
      less: lessTokenFiles,
      svgIcons: svgIconTokenFiles,
    },
    options: {
      hideMatchingHardCodedValues: false,
    },
  },
});

export const parameters = {
  playroom: {
    url: 'http://localhost:9000',
  },
  vrhythm: {
    color: 'rgba(178,86,18,0.5)',
    lineHeight: '16px',
    offset: 0,
    hide: true,
  },
};
