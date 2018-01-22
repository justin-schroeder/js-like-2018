/**
 * 02-fibonacci
 *
 * Create a simple counter with a generator.
 */

function *counter () {
  yield 1
  yield 2
  yield 3
}

/**
 * Try it out.
 */

let count = counter()

console.log(count.next().value) // 1
console.log(count.next().value) // 2
console.log(count.next().value) // 3
console.log(count.next().value) // undefined