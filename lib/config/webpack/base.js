'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpack = require('webpack');

var _path = require('path');

var _extractTextWebpackPlugin = require('extract-text-webpack-plugin');

var _extractTextWebpackPlugin2 = _interopRequireDefault(_extractTextWebpackPlugin);

var _manifestWebpackPlugin = require('@skyrpex/manifest-webpack-plugin');

var _manifestWebpackPlugin2 = _interopRequireDefault(_manifestWebpackPlugin);

var _scssLoaders = require('./scss-loaders');

var _scssLoaders2 = _interopRequireDefault(_scssLoaders);

var _userConfig = require('../../user-config');

var _userConfig2 = _interopRequireDefault(_userConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var babelEnv = _ref.babelEnv,
      extractStyles = _ref.extractStyles;

  var extractor = new _extractTextWebpackPlugin2.default({
    filename: '[name].[contenthash].css',
    disable: extractStyles == null
  });

  return {
    devtool: 'source-map',
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          forceEnv: babelEnv
        }
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: extractor.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader'
            }),
            scss: extractor.extract({
              use: (0, _scssLoaders2.default)({ starpack: _userConfig2.default }),
              fallback: 'vue-style-loader'
            })
          }
        }
      }, {
        test: /\.pug$/,
        loader: 'pug-loader'
      }, {
        test: /\.css$/,
        loader: extractor.extract({
          use: 'css-loader',
          fallback: 'style-loader'
        })
      }, {
        test: /\.scss$/,
        loader: extractor.extract({
          use: (0, _scssLoaders2.default)({ starpack: _userConfig2.default }),
          fallback: 'style-loader'
        })
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[hash:7].[ext]'
        }
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[hash:7].[ext]'
        }
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }]
    },
    resolveLoader: {
      modules: [process.cwd() + '/node_modules', (0, _path.resolve)(__dirname, '../../../node_modules')]
    },
    resolve: {
      extensions: ['.vue', '.js'],
      modules: [process.cwd() + '/node_modules', (0, _path.resolve)(__dirname, '../../../node_modules')],
      alias: {
        '~': _userConfig2.default.context
      }
    },
    plugins: [new _manifestWebpackPlugin2.default(_userConfig2.default.output.path + '/manifest.json'), extractor]
  };
};

module.exports = exports['default'];