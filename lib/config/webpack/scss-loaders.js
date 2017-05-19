'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _userConfig = require('../../user-config');

var _userConfig2 = _interopRequireDefault(_userConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return [{
    loader: 'css-loader',
    options: {
      sourceMap: true
    }
  }, { loader: 'resolve-url-loader' }, {
    loader: 'sass-loader',
    options: {
      sourceMap: true,
      includePaths: [_userConfig2.default.context, process.cwd() + '/node_modules', (0, _path.resolve)(__dirname, '../../../node_modules')]
    }
  }];
};

module.exports = exports['default'];