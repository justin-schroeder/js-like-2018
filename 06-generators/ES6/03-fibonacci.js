/**
 * 03-fibonacci
 *
 * Create the Fibonacci sequence with a generator. *
 */

function *fibonacci (total) {
  let current = 0
  let next = 1
  for (let i = 0; i < total; i++) {
    let prev = current
    yield current
    current = next
    next = prev + current
  }
}

/**
 * Try it out.
 */

for (n of fibonacci(50)) {
  console.log(n)
}
