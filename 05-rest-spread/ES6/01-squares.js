/**
 * 01-squares
 *
 * Square and sum, using the new the rest operator (...).
 *
 * Note: Also included here is a new exponentiation operator (**)
 */

function squareTwoThenSum(first, second, ...toSum) {
  return (first ** 2) + (second ** 2) + toSum.reduce((sum, value) => sum + value, 0)
}

/**
 * Try it out.
 */

console.log(squareTwoThenSum(3, 8, 1, 2, 3, 4))
