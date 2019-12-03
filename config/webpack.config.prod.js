const webpack = require('webpack');
const merge = require('webpack-merge');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const { PATH, ENV } = require('./webpack.base');

const WEBPACK_COMMON = require('./webpack.config.common');

// resolve dist folder
WEBPACK_COMMON.deleteDistFolder();

const WEBPACK_PROD_CONFIG = {
  /**
   * Choose a style of source mapping to enhance the debugging process.
   * @see https://webpack.js.org/configuration/devtool/#devtool
   */
  devtool: 'source-map',
  // devtool: false,
  /**
   * An entry point indicates which module webpack should use to begin
   * building out its internal dependency graph.
   * @see https://webpack.js.org/configuration/entry-context/
   */
  entry: [PATH.INDEX],
  output: {
    path: PATH.BUILD,
    pathinfo: true,
    filename: 'template/static/[name].[chunkhash].js',
    // chunkFilename: 'template/static/[name].[chunkhash].chunk.js',
    // sourceMapFilename: 'template/static/[name].[chunkhash].map',
    publicPath: PATH.PUBLIC,
  },
  plugins: [
    // WEBPACK_COMMON.copyPublicFile();
    new CopyWebpackPlugin([
      {
        from: PATH.APP_PUBLIC,
        to: PATH.BUILD,
        force: true,
      },
    ]),
    // new CleanWebpackPlugin(['../www']),
    // new webpack.DllReferencePlugin({
    //   context: PATH.DLL,
    //   manifest: require(`${PATH.MANIFEST}`)
    // }),
    new HtmlWebpackPlugin({
      inject: true,
      template: PATH.HTML,
      chunksSortMode: 'none',
      // minify: {
      //   collapseWhitespace: true,
      //   keepClosingSlash: true,
      //   minifyCSS: true,
      //   minifyJS: true,
      //   minifyURLs: true,
      //   removeComments: true,
      //   removeEmptyAttributes: true,
      //   removeRedundantAttributes: true,
      // },
      title: 'Production',
    }),
    // See https://github.com/Urthen/case-sensitive-paths-webpack-plugin
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(ENV.PROD),
      },
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'template/static/css/[name].[chunkhash].css',
      // chunkFilename: 'template/static/css/[id].[hash].css',
    }),
    // new webpack.HashedModuleIdsPlugin(),
  ],
  module: {
    // Makes missing exports an error instead of warning
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        exclude: /(node_modules)/,
        include: PATH.SRC,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: PATH.PUBLIC,
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: PATH.PUBLIC,
            },
          },
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'template/static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },

  mode: 'production',

  // optimization: {
  //   runtimeChunk: true,
  //   splitChunks: {
  //     // cacheGroups: {
  //     //   commons: {
  //     //     test: /[\\/]node_modules[\\/]/,
  //     //     name: 'vendors',
  //     //     chunks: 'all'
  //     //   }
  //     // }
  //         chunks: 'all'
  //       }
  //     }
  optimization: {
    // splitChunks: {
    //   chunks: 'all',
    //   cacheGroups: {
    //     styles: {
    //       name: 'styles',
    //       test: /\.css$/,
    //       chunks: 'all',
    //       enforce: true
    //     },
    //   },
    // },
    runtimeChunk: {
      name: 'manifest',
    },
    minimizer: [
      // can not uglify js with es6, switch to terser-webpack-plugin
      // new UglifyJsPlugin({
      //   cache: true,
      //   parallel: true,
      //   // sourceMap: true // set to true if you want JS source maps
      // }),
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
};

module.exports = merge.strategy({
  output: 'replace',
  plugins: 'replace',
  module: 'replace',
})(WEBPACK_COMMON.CONFIG, WEBPACK_PROD_CONFIG);
