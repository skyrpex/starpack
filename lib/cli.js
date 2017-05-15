#!/usr/bin/env node
'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

require('./commands/clean');

require('./commands/hot');

require('./commands/once');

require('./commands/karma');

require('babel-register');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version('0.0.1');

_commander2.default.command('*').action(function () {
  _commander2.default.help();
});

_commander2.default.parse(process.argv);

if (!_commander2.default.args.length) {
  _commander2.default.help();
}