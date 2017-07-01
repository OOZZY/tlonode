"use strict";

const assert = require('chai').assert;
const tlostatistics = require('tlo/statistics');

const EPSILON = Number.EPSILON;

describe('tlo/statistics', function() {
  describe('Statistics constructor', function() {
    it('should initialize statistics', function () {
      var statistics = new tlostatistics.Statistics;
      assert.closeTo(statistics.size, 0, EPSILON);
      assert.isNull(statistics.sum);
      assert.isNull(statistics.mean);
      assert.isNull(statistics.min);
      assert.isNull(statistics.max);
      assert.isNull(statistics.range);
      assert.isNull(statistics.variance);
      assert.isNull(statistics.stddeviation);
    });
  });

  describe('Statistics add', function() {
    it('should update statistics over one call', function () {
      var statistics = new tlostatistics.Statistics;
      statistics.add(50.0);
      assert.closeTo(statistics.size, 1, EPSILON);
      assert.closeTo(statistics.sum, 50, EPSILON);
      assert.closeTo(statistics.mean, 50, EPSILON);
      assert.closeTo(statistics.min, 50, EPSILON);
      assert.closeTo(statistics.max, 50, EPSILON);
      assert.closeTo(statistics.range, 0, EPSILON);
      assert.closeTo(statistics.variance, 0, EPSILON);
      assert.closeTo(statistics.stddeviation, 0, EPSILON);
    });

    it('should update statistics over multiple calls', function () {
      var statistics = new tlostatistics.Statistics;
      statistics.add(50.0);
      statistics.add(100.0);
      assert.closeTo(statistics.size, 2, EPSILON);
      assert.closeTo(statistics.sum, 150, EPSILON);
      assert.closeTo(statistics.mean, 75, EPSILON);
      assert.closeTo(statistics.min, 50, EPSILON);
      assert.closeTo(statistics.max, 100, EPSILON);
      assert.closeTo(statistics.range, 50, EPSILON);
      assert.closeTo(statistics.variance, 625, EPSILON);
      assert.closeTo(statistics.stddeviation, 25, EPSILON);
    });
  });
});
