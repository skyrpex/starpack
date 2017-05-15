'use strict';

var _del = require('del');

var _del2 = _interopRequireDefault(_del);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _hot = require('../config/webpack/hot');

var _hot2 = _interopRequireDefault(_hot);

var _clean = require('../clean');

var _clean2 = _interopRequireDefault(_clean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.command('clean').description('clean the output folder').action(function () {
  (0, _clean2.default)();
});