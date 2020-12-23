module.exports = {
  // FIXME: https://github.com/storybookjs/storybook/issues/7215
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
    '@etchteam/storybook-addon-status/register',
    '@whitespace/storybook-addon-html',
    'storybook-mobile',
    'storybook-addon-playroom',
    '@storybook/addon-storysource',
    '@storybook/addon-links',
    'storybook-design-token',
  ],
  stories: [
    '../src/components/**/*.story.(tsx|mdx)',
    '../src/forms/**/story.tsx',
  ],
};
