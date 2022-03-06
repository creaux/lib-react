module.exports = {
  core: {
    builder: "webpack5",
  },
  // FIXME: https://github.com/storybookjs/storybook/issues/7215
  addons: [
    '@storybook/preset-create-react-app',
    // '@storybook/addon-actions',
    '@storybook/addon-docs',
    // '@storybook/addon-controls',
    // '@storybook/addon-viewport',
    // // '@etchteam/storybook-addon-status/register', // TO have badge with the status in the story same as badges bellow
    // '@whitespace/storybook-addon-html',
    // 'storybook-mobile',
    // // 'storybook-addon-playroom', // To being able edit stories in storybook
    // '@storybook/addon-storysource',
    // '@storybook/addon-links',
    // // 'storybook-design-token', // This is for showing colors as design system and other stuff autogenerated from scss code itself
    // // "storybook-zeplin/register", // To have that paired with zeplin
    // '@geometricpanda/storybook-addon-badges/register', // TO have badge with the status in the story, same as status above
    // '@storybook/addon-cssresources'
  ],
  stories: [
    '../src/components/**/*.story.@(tsx|mdx)',
    '../src/forms/**/story.tsx',
  ],
  refs: (config, { configType }) => {
    if (configType === 'DEVELOPMENT') {
      return {
        design: {
          title: "Design System",
          url: "http://localhost:6006"
        }
      };
    }

    return {
      design: {
        title: "Design System",
        url: "https://master--60746846d2f0f90021379711.chromatic.com"
      }
    };
  }
};
