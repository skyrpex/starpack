'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpackMerge = require('webpack-merge');

var _webpackMerge2 = _interopRequireDefault(_webpackMerge);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var starpack = _ref.starpack,
      babelEnv = _ref.babelEnv;
  return (0, _webpackMerge2.default)((0, _base2.default)({ starpack: starpack, babelEnv: babelEnv }), {
    entry: starpack.entry,
    output: {
      filename: 'bundle.js',
      path: starpack.output
    }
  });
};