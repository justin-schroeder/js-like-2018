/**
 * 01-squares
 *
 * Basic arrow function syntax.
 */

let squaresA = [1, 2, 3, 4].map((n) => {
  return n * n
});

/**
 * - When accepting a single argument you don't need parentheses.
 * - When performing a single statement no braces or return statement needed.
 */
let squaresB = [1, 2, 3, 4].map(n => n * n)


/**
 * Try it out:
 */

console.log(squaresA)
console.log(squaresB)
