var path = require('path');

module.exports = {
  output : {
    path: path.resolve(__dirname, '../dist/pub/'),
  },
  module : {
    rules: [
      {
        test  : /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        // exclude: /node_modules/,
      },
    ],
  },
  /*resolve: {
    extensions: [
      'ts', 'tsx', '.js', '.json',
    ],
  },*/
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
  },
};
