/**
 * 03-multiple
 *
 * Pretends to fetch content from multiple sources.
 */

function fetch(url, callback) {
  setTimeout(function () {
    callback(url);
  }, Math.random()*3000);
}


var results = [];
function oncomplete (result) {
  results.push(result);
  if (results.length >= 3) {
    console.log('All results complete: ' + results);
  }
}

fetch('http://www.google.com', oncomplete);
fetch('http://www.apple.com', oncomplete);
fetch('http://www.facebook.com', oncomplete);