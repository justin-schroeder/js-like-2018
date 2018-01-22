/**
 * 02-fetch
 *
 * Pretends to fetch content.
 */

function fetch(url, callback) {
  setTimeout(function () {
    callback(url);
  }, Math.random()*3000);
}

fetch('http://www.google.com', function (url) {
  console.log('All results complete: ' + results);
});