const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const { PATH, ENV, SERVER, ANALYZER } = require('./webpack.base');
const { PROTOCOL, HOST, PORT } = SERVER;

const WEBPACK_COMMON = require('./webpack.config.common');

const WEBPACK_DEV_CONFIG = {
  /**
   * Choose a style of source mapping to enhance the debugging process.
   * @see https://webpack.js.org/configuration/devtool/#devtool
   */
  devtool: 'cheap-module-source-map',
  /**
   * An entry point indicates which module webpack should use to begin
   * building out its internal dependency graph.
   * @see https://webpack.js.org/configuration/entry-context/
   */
  entry: [
    `${require.resolve('webpack-dev-server/client')}?/`,
    require.resolve('webpack/hot/dev-server'),
    PATH.INDEX,
  ],
  /**
   * How and where webpack should output your bundles.
   * @see https://webpack.js.org/configuration/output/
   */
  output: {
    path: PATH.BUILD,
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: PATH.PUBLIC,
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: PATH.DLL,
      manifest: require(`${PATH.MANIFEST}`),
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: PATH.HTML,
      chunksSortMode: 'none',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // See https://github.com/Urthen/case-sensitive-paths-webpack-plugin
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(ENV.DEV),
      },
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new CaseSensitivePathsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    // See https://github.com/geowarin/friendly-errors-webpack-plugin
    new FriendlyErrorsPlugin(),
    // See https://github.com/th0r/webpack-bundle-analyzer
    new BundleAnalyzerPlugin({
      analyzerPort: ANALYZER.PORT,
      openAnalyzer: ANALYZER.OPEN,
    }),
  ],

  module: {
    // Makes missing exports an error instead of warning
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)?$/,
        exclude: /(node_modules)/,
        include: PATH.SRC,
        use: [
          // 'thread-loader',
          'babel-loader',
        ],
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2, // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              importLoaders: 1, // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
            },
          },

          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1, // 0 => no loaders (default); 1 => postcss-loader
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        exclude: /(node_modules)/,
        loader: 'url-loader',
      },
    ],
  },
  /**
   * Turn off performance hints for development.
   * @see https://webpack.js.org/configuration/performance/
   */
  performance: {
    hints: false,
  },
  /**
   * Use webpack with a development server that provides live reloading.
   * @see https://webpack.js.org/configuration/dev-server/
   */
  devServer: {
    // Enable gzip compression for everything served
    compress: true,
    // Tell the server where to serve content from.
    // This is only necessary if you want to serve static files.
    contentBase: PATH.APP_PUBLIC,
    // // Prevent webpack's own logs shown in console.
    // clientLogLevel: 'none',
    // Enable full page reload if file chages
    watchContentBase: true,
    // // Enable webpack's Hot Module Replacement feature
    // hot: true,
    // We need to access the bundle file
    publicPath: PATH.PUBLIC,
    // We do not need comply messages
    quiet: true,
    // We do not watch files in node_modules for saving CPU and memory
    watchOptions: {
      ignored: /node_modules/,
    },
    // We have used FriendlyErrorsPlugin instead
    overlay: false,
    // We need dot url if we have url like '/xxx.com'
    historyApiFallback: {
      disableDotRule: true,
    },
    // Enable HTTPS if the HTTPS environment variable is set to 'true'
    https: PROTOCOL === 'https',
    // Specify a host to use
    host: HOST,
    // Specify a port to use
    port: PORT,
    // before(app){
    //   apiMocker(app, PATH.MOCKER, {
    //     proxy: {
    //       '/repos//*': 'https://api.github.com/',
    //     },
    //     changeHost: true,
    //   })
    // },
    hot: true,
    inline: true,
  },

  mode: 'development',

  optimization: {
    usedExports: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};

module.exports = merge.strategy({
  output: 'replace',
})(WEBPACK_COMMON.CONFIG, WEBPACK_DEV_CONFIG);
