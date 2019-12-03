const webpack = require('webpack');
const { PATH } = require('./webpack.base');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: PATH.DLL,
    filename: '[name].dll.js',
    library: '[name]_[hash]',
  },
  plugins: [
    new webpack.DllPlugin({
      path: PATH.MANIFEST,
      name: '[name]_[hash]',
    }),
  ],

  mode: 'development',
};
