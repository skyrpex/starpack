'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpackMerge = require('webpack-merge');

var _webpackMerge2 = _interopRequireDefault(_webpackMerge);

var _userConfig = require('../../user-config');

var _userConfig2 = _interopRequireDefault(_userConfig);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var babelEnv = _ref.babelEnv;
  return (0, _webpackMerge2.default)((0, _base2.default)({ babelEnv: babelEnv }), {
    entry: _userConfig2.default.entry,
    output: {
      filename: 'bundle.js',
      path: _userConfig2.default.output.path
    }
  });
};

module.exports = exports['default'];