/**
 * 02-named
 *
 * ES5 version of a named import.
 */

var math = require('./libs/lib2');
var square = math.square;
var cube = math.cube;

console.log(square(3));
console.log(cube(3));