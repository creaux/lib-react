// According https://stylable.io/docs/getting-started/install-configure#types
declare module '*.svg' {
  const content: { ReactComponent };
  export default content;
}

declare module '*.md';
declare module 'window';

declare module '*.scss' {
  const content: any;
  export default content;
}

interface Global extends NodeJS.Global {
  expect: Chai.ExpectStatic;
}

declare const global: Global;
