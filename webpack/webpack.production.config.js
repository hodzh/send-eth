import webpack from 'webpack';
import Config from 'webpack-config';

export default new Config().extend('webpack/webpack.base.config.js').merge({
  entry  : [
    path.join(__dirname, '../src/tx/pub/main.tsx'),
  ],
  output : {
    filename: 'bundle.min.js',
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
      },
    }),
    new webpack.DefinePlugin({__DEV__: false}),
  ],
});
