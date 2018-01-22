/**
 * 03-multiple
 *
 * Pretends to fetch content from multiple sources.
 */

function fetch(url) {
  return new Promise((resolve, request) => setTimeout(() => resolve(url), Math.random()*3000))
}


Promise.all([
  fetch('http://www.google.com'),
  fetch('http://www.apple.com'),
  fetch('http://www.facebook.com')
]).then(results => console.log('All results complete: ' + results))