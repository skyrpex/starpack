"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// eslint-disable-next-line import/no-dynamic-require, global-require
var config = require(process.cwd() + "/starpack.config");

exports.default = config.default ? config.default : config;
module.exports = exports["default"];