'use strict';

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _once = require('../config/webpack/once');

var _once2 = _interopRequireDefault(_once);

var _clean = require('../clean');

var _clean2 = _interopRequireDefault(_clean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.command('build').description('build for production').action(function () {
  // eslint-disable-next-line import/no-dynamic-require
  var starpack = require(process.cwd() + '/starpack.config').default;

  var compiler = (0, _webpack2.default)((0, _once2.default)({
    starpack: starpack,
    babelEnv: 'build'
  }));

  (0, _clean2.default)();

  compiler.run(function (error, stats) {
    if (error) {
      console.error(error);
      throw error;
    }

    console.log(stats.toString({
      colors: true
    }));
  });
});