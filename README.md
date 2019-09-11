### How to start development?

# 1. Install Dependencies

`npm i`

# 2. Run storybook for development

`npm run storybook`

### FAQ

1. Invalid hook call. Hooks can only be called inside of the body of a function component.
 
When using `npm link` then we have to run in this `lib-react` directory following `npm link ../{app-dir}/node_modules/react` to link current react app react version according https://github.com/facebook/react/issues/15315#issuecomment-479802153.
