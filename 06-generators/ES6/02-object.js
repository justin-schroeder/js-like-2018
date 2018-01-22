/**
 * 02-object
 *
 * Displays the internal yield object with a loop.
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

do {
  var gen = count.next()
  console.log(gen)
} while (!gen.done)

// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }