/**
 * 02-sum
 *
 * Generate a random array of numbers, then sum it.
 */

function sum() {
  var args = Array.prototype.slice.call(arguments);
  console.log('Numbers to sum: ' + args);
  var sum = args.reduce(function (sum, arg) {
    return sum + arg;
  }, 0);
  console.log('Sum: ' + sum);
}

function getSomeNumbers () {
  var numbers = [];
  for (var i = 0; i < Math.ceil(Math.random()*10); i++)  {
    numbers.push(Math.ceil(Math.random() * 100));
  }
  return numbers;
}

sum.apply(null, getSomeNumbers());
