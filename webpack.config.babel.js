import Config, { environment } from 'webpack-config';

environment.setAll({
  env: () => process.env.NODE_ENV,
});

export default new Config().extend(
  `webpack/webpack.${process.env.NODE_ENV || 'development'}.config.js`);
