"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  // eslint-disable-next-line import/no-dynamic-require, global-require
  return require(process.cwd() + "/starpack.config").default;
};