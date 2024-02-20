'use strict';

module.exports = core;
const test = require('hopper-security');
function core() {
  return 'Hello from core';
}

console.log(core(), test());