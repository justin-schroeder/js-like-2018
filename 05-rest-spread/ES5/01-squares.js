/**
 * 01-squares
 *
 * Square and sum.
 */

function squareTwoThenSum(first, second) {
  var toSum = Array.prototype.slice.call(arguments, squareTwoThenSum.length);
  return (first*first) + (second*second) + toSum.reduce(function (sum, value) {
    return sum + value;
  }, 0);
}

/**
 * Try it out.
 */

console.log(squareTwoThenSum(3, 8, 1, 2, 3, 4));
