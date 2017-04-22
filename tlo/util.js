"use strict";

exports.printNodeVersion = function() {
  console.log(process.version);
  console.log(process.versions);
  return process.version;
}
