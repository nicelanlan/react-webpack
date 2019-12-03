'use strict';

const {
  jestPreset: tsJest
} = require('ts-jest');

module.exports = {
  ...tsJest,
  verbose: true,
  setupFiles: ['./src/tests/index.js'],
  transform: {
    // ...tsJest.transform,
    // '^.+\\.js?$': 'babel-jest',
    '^.+\\.(j|t)sx?$': './node_modules/ts-jest/preprocessor.js'
  },
  transformIgnorePatterns: ['/node_modules/'],
  testMatch: [
    "**/__tests__/**/*.js?(x)",
    "**/?(*.)+(spec|test).js?(x)"
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testPathIgnorePatterns: ['/node_modules/'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    // '\\.(jpg|jpeg|png|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  collectCoverageFrom: ['src/components/**/*.{ts,tsx}', '!src/components/**/index.ts'],
  roots: [
    './src/components',
  ],
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json',
      // babelConfig: true,
  }
  },
  moduleDirectories: [
    'node_modules',
    'src/components',
  ]
};
