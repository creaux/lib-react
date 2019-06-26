import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import path from 'path';
// Animo Theme
import '../src/themes/animo/theme.scss';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  addDecorator(withKnobs);

  let ctx;
  if (process.env.NODE_ENV === 'test') {
    const requireContext = require('require-context');
    ctx = requireContext(path.resolve(__dirname, "../src"), true, /story\.tsx?$/);
  } else {
    ctx = require.context("../src", true, /story\.tsx?$/);
  }

  requireAll(ctx);
}

configure(loadStories, module);
