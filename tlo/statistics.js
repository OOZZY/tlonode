"use strict";

exports.Statistics = class Statistics {
  constructor() {
    this._size = 0;
    this._sum = null;
    this._mean = null;
    this._min = null;
    this._max = null;
    this._range = null;
    this._sumsquares = null;
    this._meansquares = null;
    this._variance = null;
    this._stddeviation = null;
  }

  add(num) {
    this._size++;
    if (this._size === 1) {
      this._sum = num;
      this._mean = num;
      this._min = num;
      this._max = num;
      this._range = 0;
      this._sumsquares = num * num;
      this._meansquares = this._sumsquares;
      this._variance = 0;
      this._stddeviation = 0;
    } else {
      this._sum += num;
      this._mean = this._sum / this._size;
      if (this._min > num) {
        this._min = num;
      }
      if (this._max < num) {
        this._max = num;
      }
      this._range = this._max - this._min;
      this._sumsquares += num * num;
      this._meansquares = this._sumsquares / this._size;
      this._variance = this._meansquares - this._mean * this._mean;
      this._stddeviation = Math.sqrt(this._variance);
    }
  }

  get size() { return this._size; }
  get sum() { return this._sum; }
  get mean() { return this._mean; }
  get min() { return this._min; }
  get max() { return this._max; }
  get range() { return this._range; }
  get variance() { return this._variance; }
  get stddeviation() { return this._stddeviation; }
}
