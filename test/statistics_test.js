"use strict";

const assert = require('assert');
const tlostatistics = require('tlo/statistics');

describe('tlo/statistics', function() {
  describe('Statistics constructor', function() {
    it('should initialize statistics', function () {
      var statistics = new tlostatistics.Statistics;
      assert.equal(statistics.size, 0);
      assert.equal(statistics.sum, null);
      assert.equal(statistics.mean, null);
      assert.equal(statistics.min, null);
      assert.equal(statistics.max, null);
      assert.equal(statistics.range, null);
      assert.equal(statistics.variance, null);
      assert.equal(statistics.stddeviation, null);
    });
  });

  describe('Statistics add', function() {
    it('should update statistics over one call', function () {
      var statistics = new tlostatistics.Statistics;
      statistics.add(50.0);
      assert.equal(statistics.size, 1);
      assert.equal(statistics.sum, 50);
      assert.equal(statistics.mean, 50);
      assert.equal(statistics.min, 50);
      assert.equal(statistics.max, 50);
      assert.equal(statistics.range, 0);
      assert.equal(statistics.variance, 0);
      assert.equal(statistics.stddeviation, 0);
    });

    it('should update statistics over multiple calls', function () {
      var statistics = new tlostatistics.Statistics;
      statistics.add(50.0);
      statistics.add(100.0);
      assert.equal(statistics.size, 2);
      assert.equal(statistics.sum, 150);
      assert.equal(statistics.mean, 75);
      assert.equal(statistics.min, 50);
      assert.equal(statistics.max, 100);
      assert.equal(statistics.range, 50);
      assert.equal(statistics.variance, 625);
      assert.equal(statistics.stddeviation, 25);
    });
  });
});
