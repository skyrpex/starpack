'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _userConfig = require('../../user-config');

var _userConfig2 = _interopRequireDefault(_userConfig);

var _base = require('../webpack/base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function () {
  var webpack = (0, _base2.default)({
    babelEnv: 'test'
  });
  webpack.entry = null;
  webpack.devtool = 'inline-source-map';
  webpack.plugins = [];

  return {
    frameworks: ['mocha', 'chai-sinon'],
    browsers: ['PhantomJS'],
    reporters: ['spec', 'coverage'],
    files: [_userConfig2.default.tests],
    preprocessors: _defineProperty({}, _userConfig2.default.tests, ['webpack', 'sourcemap']),
    webpack: webpack,
    webpackMiddleware: {
      noInfo: true,
      quiet: true,
      stats: 'errors-only'
    }
  };
};

module.exports = exports['default'];