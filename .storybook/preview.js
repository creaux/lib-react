// import defaultTheme from '!raw-loader!sass-loader!../src/themes/default/main.scss';
// import animoTheme from '!raw-loader!sass-loader!../src/themes/animo/main.scss';
// import checkoutTheme from '!raw-loader!sass-loader!../src/themes/checkout/main.scss';
import { addParameters, addDecorator } from '@storybook/react';
import React from 'react';
import StorybookVRhythm from 'storybook-vrhythm';
import { Badges } from '../src/badges.enum.ts'
import { withCssResources } from '@storybook/addon-cssresources';

addDecorator(StorybookVRhythm);

// const cssReq = require.context('!!raw-loader!../src', true, /.\.css$/);
// const cssTokenFiles = cssReq
//   .keys()
//   .map((filename) => ({ filename, content: cssReq(filename).default }));
//
// const scssReq = require.context('!!raw-loader!../src', true, /.\.scss$/);
// const scssTokenFiles = scssReq
//   .keys()
//   .map((filename) => ({ filename, content: scssReq(filename).default }));
//
// const lessReq = require.context('!!raw-loader!../src', true, /.\.less$/);
// const lessTokenFiles = lessReq
//   .keys()
//   .map((filename) => ({ filename, content: lessReq(filename).default }));
//
// const svgIconsReq = require.context('!!raw-loader!../src', true, /.\.svg$/);
// const svgIconTokenFiles = svgIconsReq
//   .keys()
//   .map((filename) => ({ filename, content: svgIconsReq(filename).default }));
//
// addParameters({
//   designToken: {
//     files: {
//       css: cssTokenFiles,
//       scss: [...scssTokenFiles],
//       less: lessTokenFiles,
//       svgIcons: svgIconTokenFiles,
//     },
//     options: {
//       hideMatchingHardCodedValues: false,
//     },
//   },
// });

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
  layout: 'centered'
};

addParameters({
  badgesConfig: {
    [Badges.DESIGN_LINKED]: {
      contrast: '#FFF',
      color: '#018786',
      title: Badges.DESIGN_LINKED
    },
    [Badges.DESIGN_PROVIDED]: {
      contrast: '#FFF',
      color: '#018786',
      title: Badges.DESIGN_PROVIDED
    },
    [Badges.DESIGN_APPLIED]: {
      contrast: '#FFF',
      color: '#6200EE',
      title: Badges.DESIGN_APPLIED
    }
  }
});

addParameters({
  cssresources: [
    {
      id: `Default`,
      code: `<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/@creaux/lib-html/css/main.css'>`,
      picked: true,
      hideCode: true, // Defaults to false, this enables you to hide the code snippet and only displays the style selector
    },
    {
      id: `Checkout`,
      code: `<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/@creaux/lib-html/css/checkout.css'>`,
      picked: false,
      hideCode: true, // Defaults to false, this enables you to hide the code snippet and only displays the style selector
    },
    {
      id: `Animo`,
      code: `<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/@creaux/lib-html/css/animo.css'>`,
      picked: false,
      hideCode: true, // Defaults to false, this enables you to hide the code snippet and only displays the style selector
    },
    {
      id: `Resume`,
      code: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@creaux/lib-html/css/resume.css">`,
      picked: true,
      hideCode: true, // Defaults to false, this enables you to hide the code snippet and only displays the style selector
    },
  ],
});

addDecorator(withCssResources);
