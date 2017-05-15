'use strict';

require('eventsource-polyfill');

var _clientNoInfoTrueReloadTrueDynamicPublicPathTruePath__webpack_hmr = require('webpack-hot-middleware/client?noInfo=true&reload=true&dynamicPublicPath=true&path=__webpack_hmr');

var _clientNoInfoTrueReloadTrueDynamicPublicPathTruePath__webpack_hmr2 = _interopRequireDefault(_clientNoInfoTrueReloadTrueDynamicPublicPathTruePath__webpack_hmr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_clientNoInfoTrueReloadTrueDynamicPublicPathTruePath__webpack_hmr2.default.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload();
  }
});