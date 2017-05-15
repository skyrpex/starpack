'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var starpack = _ref.starpack;
  return [{
    loader: 'css-loader',
    options: {
      sourceMap: true
    }
  }, { loader: 'resolve-url-loader' }, {
    loader: 'sass-loader',
    options: {
      sourceMap: true,
      includePaths: [starpack.base, starpack.nodeModules]
    }
  }];
};