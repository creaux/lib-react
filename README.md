### How to start development?

[![Build Status](https://travis-ci.org/creaux/lib-react.svg?branch=master)](https://travis-ci.org/creaux/lib-react)

[![Storybook](https://raw.githubusercontent.com/storybookjs/brand/master/badge/badge-storybook.svg)](https://5f21a8605d292e0022c33ef7-bwyzybpumv.chromatic.com)

# 1. Install Dependencies

`npm i`

# 2. Run storybook for development

`npm run storybook`

### FAQ

1. Invalid hook call. Hooks can only be called inside of the body of a function component.

When using `npm link` then we have to run in this `lib-react` directory following `npm link ../{app-dir}/node_modules/react` to link current react app react version according https://github.com/facebook/react/issues/15315#issuecomment-479802153.
