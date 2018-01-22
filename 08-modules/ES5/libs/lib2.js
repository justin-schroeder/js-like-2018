/**
 * lib1
 *
 * Math CommonJS export.
 */

function square(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

module.exports = {
  square: square,
  cube: cube
};
