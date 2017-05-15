'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _del = require('del');

var _del2 = _interopRequireDefault(_del);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  // eslint-disable-next-line import/no-dynamic-require, global-require
  var starpack = require(process.cwd() + '/starpack.config').default;

  _del2.default.sync([starpack.output + '/**/*']);
};