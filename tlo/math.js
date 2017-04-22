"use strict";

exports.factorial = function(n) {
  var product = 1;
  for (var i = 2; i <= n; ++i) {
    product *= i;
  }
  return product;
}
