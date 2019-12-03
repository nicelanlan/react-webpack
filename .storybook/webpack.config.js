const resolve = relativePath => path.resolve(fs.realpathSync(process.cwd()), relativePath);

module.exports = ({ config }) => {
  config.module.rules.push(
    {
      test: /\.(ts|js)[x]?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    },
    {
      test: /\.css$/,
      exclude: /(node_modules)/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2, // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
          },
        },
        'postcss-loader',
        'sass-loader',
      ],
    },
    {
      test: /\.scss$/,
      // exclude: /(node_modules)/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2, // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
          },
        },
        'postcss-loader',
        'sass-loader',
      ],
    },
    {
      test: /\.(png|jpe?g|gif|svg|eot|woff|ttf|woff2)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: 'assets/[name].[ext]'
      }
    }
  );
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
