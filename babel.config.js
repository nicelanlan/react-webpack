'use strict';
const kebabCase = require('./node_modules/lodash.kebabcase')
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 Chrome versions'],
        },
        // modules: false
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    ['@babel/plugin-proposal-object-rest-spread'],
    '@babel/plugin-transform-destructuring',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-runtime',
    [
      'transform-imports',
      {
        'eds-react': {
          transform: (importName, matches) => {
            switch (importName) {
              case 'Row':
                return 'eds-react/lib/components/grid';
              case 'Col':
                return 'eds-react/lib/components/grid';
              default:
                return `eds-react/lib/components/${kebabCase(importName)}`;
            }
          },
          preventFullImport: true,
          skipDefaultConversion: true,
        },
        'date-fns': {
          transform: importName => `date-fns/${snakeCase(importName)}`,
          preventFullImport: true,
        },
      },
    ],
  ],
};
