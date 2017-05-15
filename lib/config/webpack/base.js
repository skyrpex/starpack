'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpack = require('webpack');

var _extractTextWebpackPlugin = require('extract-text-webpack-plugin');

var _extractTextWebpackPlugin2 = _interopRequireDefault(_extractTextWebpackPlugin);

var _manifestWebpackPlugin = require('@skyrpex/manifest-webpack-plugin');

var _manifestWebpackPlugin2 = _interopRequireDefault(_manifestWebpackPlugin);

var _scssLoaders = require('./scss-loaders');

var _scssLoaders2 = _interopRequireDefault(_scssLoaders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var starpack = _ref.starpack,
      babelEnv = _ref.babelEnv,
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
              use: (0, _scssLoaders2.default)({ starpack: starpack }),
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
          use: (0, _scssLoaders2.default)({ starpack: starpack }),
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
    resolve: {
      extensions: ['.vue', '.js'],
      alias: {
        '~': starpack.base
      }
    },
    plugins: [new _manifestWebpackPlugin2.default(starpack.output + '/manifest.json'), extractor]
  };
};