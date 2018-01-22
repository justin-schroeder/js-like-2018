/**
 * 02-objects
 *
 * Assignment by index.
 */

function squareAsync(options) {
  setTimeout(function () {
    var results = options.numbers.map(function (n) {
      return n * n;
    });
    options.callback(results);
  }, 100);
}


squareAsync({
  numbers: [1, 2, 3, 4, 5, 6],
  callback: function (results) {
    console.log(results);
  }
});