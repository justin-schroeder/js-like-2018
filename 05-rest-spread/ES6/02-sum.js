/**
 * 02-sum
 *
 * Generate a random array of numbers, then sum it.
 */

function sum(...args) {
  console.log('Numbers to sum: ' + args)
  let sum = args.reduce((sum, arg) => sum + arg)
  console.log('Sum: ' + sum)
}

function getSomeNumbers () {
  return Array(Math.ceil(Math.random()*10))
    .fill(1)  // This is ES6 too!
    .map(() => Math.ceil(Math.random() * 100))
}

sum(...getSomeNumbers())
