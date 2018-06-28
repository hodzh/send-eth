import webpack from 'webpack';
import path from 'path';
import Config from 'webpack-config';

export default new Config().extend('webpack/webpack.base.config.js').merge({
  mode   : 'development',
  entry  : [
    // 'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, '../src/tx/pub/main.tsx'),
  ],
  devtool: 'inline-source-map',
  output : {
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({__DEV__: true}),
  ],
});


