'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpackMerge = require('webpack-merge');

var _webpackMerge2 = _interopRequireDefault(_webpackMerge);

var _webpack = require('webpack');

var _progressBarWebpackPlugin = require('progress-bar-webpack-plugin');

var _progressBarWebpackPlugin2 = _interopRequireDefault(_progressBarWebpackPlugin);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var starpack = _ref.starpack,
      babelEnv = _ref.babelEnv;
  return (0, _webpackMerge2.default)((0, _base2.default)({
    starpack: starpack,
    babelEnv: babelEnv,
    extractStyles: true
  }), {
    entry: starpack.entry,
    output: {
      filename: '[name].[chunkhash].js',
      chunkFilename: '[id].[chunkhash].js',
      path: starpack.output
    },
    plugins: [new _progressBarWebpackPlugin2.default(),
    // new LodashModuleReplacementPlugin(),
    new _webpack.optimize.OccurrenceOrderPlugin(), new _webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }), new _webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[chunkhash:20].js',
      minChunks: function minChunks(module) {
        return module.resource && /\.js$/.test(module.resource) && module.resource.indexOf(_path2.default.resolve(__dirname, '../../../../../node_modules')) === 0;
      }
    }), new _webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    })]
  });
};
// import LodashModuleReplacementPlugin from 'lodash-webpack-plugin';