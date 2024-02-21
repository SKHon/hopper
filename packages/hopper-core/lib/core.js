'use strict';

module.exports = core;
const test = require('hopper-quality');
function core() {
  return 'Hello from core';
}

console.log(core(), test());