const
  path = require('path'),
  merge = require('webpack-merge'),

  baseConfig = require('./webpack.base.config'),
  pathTo = relative => path.resolve(__dirname, relative);


module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: pathTo('../dist')
  }
});
