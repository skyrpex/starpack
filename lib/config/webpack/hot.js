'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpack = require('webpack');

var _webpackMerge = require('webpack-merge');

var _webpackMerge2 = _interopRequireDefault(_webpackMerge);

var _progressBarWebpackPlugin = require('progress-bar-webpack-plugin');

var _progressBarWebpackPlugin2 = _interopRequireDefault(_progressBarWebpackPlugin);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var starpack = _ref.starpack,
      babelEnv = _ref.babelEnv,
      port = _ref.port;
  return (0, _webpackMerge2.default)((0, _base2.default)({ starpack: starpack, babelEnv: babelEnv }), {
    devtool: 'eval',
    entry: [require.resolve('../../hot-reload'), starpack.entry],
    output: {
      publicPath: 'http://localhost:' + port + '/'
    },
    plugins: [new _progressBarWebpackPlugin2.default(), new _webpack.HotModuleReplacementPlugin(), new _webpack.NoEmitOnErrorsPlugin()]
  });
};