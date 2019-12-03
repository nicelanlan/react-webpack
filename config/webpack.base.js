const path = require('path');
const fs = require('fs');

// Make sure any symlinks in the project folder are resolved
const resolve = relativePath => path.resolve(fs.realpathSync(process.cwd()), relativePath);

module.exports = {
  ENV: {
    DEV: 'development',
    PROD: 'production',
    TEST: 'test'
  },
  PATH: {
    APP: resolve('.'),
    SRC: resolve('src'),
    BUILD: resolve('dist'),
    DLL: resolve('dll'),
    MANIFEST: resolve('dll/manifest.json'),
    HTML: resolve('public/index.html'),
    NODE: resolve('node_modules'),
    APP_PUBLIC: 'public',
    PUBLIC: '/',
    INDEX: resolve('src/index.tsx'),
    // MOCKER: resolve('./mock/index.js'),
  },
  SERVER: {
    PROTOCOL: process.env.HTTPS === 'true' ? 'https' : 'http',
    HOST: process.env.HOST || 'localhost',
    PORT: 4000
  },
  ANALYZER: {
    PORT: 4001,
    OPEN: false
  },
  SOURCEMAP: {
    DEV: true,
    PROD: false
  }
};
