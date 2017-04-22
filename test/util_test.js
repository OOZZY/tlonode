"use strict";

const assert = require('assert');
const tloutil = require('tlo/util');

describe('tlo/util', function() {
  describe('printNodeVersion', function() {
    it('should return the version of node', function() {
      assert.equal(tloutil.printNodeVersion(), process.version);
    });
  });
});
