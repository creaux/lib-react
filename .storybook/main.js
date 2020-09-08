module.exports = {
  addons: ['@storybook/preset-create-react-app', '@storybook/addon-docs'],
  stories: [
    '../src/components/**/*.story.(tsx|mdx)',
    '../src/forms/**/story.tsx',
  ],
};
