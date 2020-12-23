module.exports = {
  components: './src/index.ts',
  outputPath: './dist/playroom',
  typeScriptFiles: ['src/**/*.{ts,tsx}', '!**/node_modules'],

  // Optional:
  // title: 'My Awesome Library',
  // themes: './src/themes',
  // snippets: './playroom/snippets.js',
  // frameComponent: './playroom/FrameComponent.js',
  // scope: './playroom/useScope.js',
  // widths: [320, 768, 1024],
  port: 9000,
  // openBrowser: true,
  // paramType: 'search', // default is 'hash'
  // exampleCode: `
  //   <Button>
  //     Hello World!
  //   </Button>
  // `,
  // baseUrl: '/playroom/',
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: /src/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx'],
    },
  }),
  // iframeSandbox: 'allow-scripts',
};
