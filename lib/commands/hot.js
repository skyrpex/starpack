'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _connectHistoryApiFallback = require('connect-history-api-fallback');

var _connectHistoryApiFallback2 = _interopRequireDefault(_connectHistoryApiFallback);

var _hot = require('../config/webpack/hot');

var _hot2 = _interopRequireDefault(_hot);

var _clean = require('../clean');

var _clean2 = _interopRequireDefault(_clean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Disable deprecation comment for babel (https://github.com/webpack/loader-utils/issues/56#issuecomment-281967053)
process.noDeprecation = true;

_commander2.default.command('hot').description('start a HMR enabled development server').option('-p, --port <port>', 'the port to serve the application on', 8080).action(function (command) {
  var compiler = (0, _webpack2.default)((0, _hot2.default)({
    babelEnv: 'build',
    port: command.port
  }));

  var server = (0, _express2.default)();

  server.use((0, _connectHistoryApiFallback2.default)());

  server.use((0, _webpackDevMiddleware2.default)(compiler, {
    publicPath: compiler.options.output.publicPath,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    stats: {
      colors: true,
      chunks: false
    }
  }));

  server.use((0, _webpackHotMiddleware2.default)(compiler));

  (0, _clean2.default)();

  server.listen(command.port, function (error) {
    if (error) {
      throw error;
    }

    // process.stdout.write(`Listening at ${compiler.options.output.publicPath}\n`);
  });
});