/**
 * 02-fetch
 *
 * Pretends to fetch content.
 */

function fetch(url) {
  return new Promise((resolve, request) => setTimeout(() => resolve(url), Math.random()*3000))
}

fetch('http://www.google.com')
.then(url => console.log(`connected to: ${url}`))
