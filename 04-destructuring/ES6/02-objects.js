/**
 * 02-objects
 *
 * Assignment by index.
 */

function squareAsync({numbers, callback}) {
  setTimeout(() => callback(numbers.map(n => n * n)), 100)
}


squareAsync({
  numbers: [1, 2, 3, 4, 5, 6],
  callback: results => console.log(results)
})