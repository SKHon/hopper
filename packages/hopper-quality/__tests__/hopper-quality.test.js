'use strict';

const projectSecurity = require('../lib/quality');
const assert = require('assert').strict;

assert.strictEqual(projectSecurity(), 'Hello from projectSecurity');
console.info('projectSecurity tests passed');
