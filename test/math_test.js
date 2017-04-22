"use strict";

const assert = require('assert');
const tlomath = require('tlo/math');

describe('tlo/math', function() {
  describe('factorial', function() {
    it('should return n! when given n', function() {
      assert.equal(tlomath.factorial(0), 1);
      assert.equal(tlomath.factorial(1), 1);
      assert.equal(tlomath.factorial(2), 2);
      assert.equal(tlomath.factorial(3), 6);
      assert.equal(tlomath.factorial(4), 24);
      assert.equal(tlomath.factorial(5), 120);
      assert.equal(tlomath.factorial(6), 720);
      assert.equal(tlomath.factorial(7), 5040);
      assert.equal(tlomath.factorial(8), 40320);
      assert.equal(tlomath.factorial(9), 362880);
      assert.equal(tlomath.factorial(10), 3628800);
    });
  });
});
