'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _del = require('del');

var _del2 = _interopRequireDefault(_del);

var _userConfig = require('./user-config');

var _userConfig2 = _interopRequireDefault(_userConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  _del2.default.sync([_userConfig2.default.output.path + '/**/*']);
};

module.exports = exports['default'];