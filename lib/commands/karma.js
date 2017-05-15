'use strict';

var _karma = require('karma');

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _karma2 = require('../config/karma');

var _karma3 = _interopRequireDefault(_karma2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.command('karma').description('start the testing server').action(function () {
  // eslint-disable-next-line import/no-dynamic-require
  var starpack = require(process.cwd() + '/starpack.config').default;

  var config = (0, _karma3.default)({ starpack: starpack });

  var server = new _karma.Server(config, function (exitCode) {
    process.exit(exitCode);
  });

  server.start();
});