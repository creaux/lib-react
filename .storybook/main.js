module.exports = {
  // FIXME: https://github.com/storybookjs/storybook/issues/7215
  addons: ['@storybook/preset-create-react-app', '@storybook/addon-actions', '@storybook/addon-controls', '@storybook/addon-docs'],
  stories: [
    '../src/components/**/*.story.(tsx|mdx)',
    '../src/forms/**/story.tsx',
  ],
};
