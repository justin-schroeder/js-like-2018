/**
 * 01-car
 *
 * Tracks the distance a car has traveled over time.
 */

var ES5Car = function (mph, car) {
  this.car = car || '🚗';
  var that = this;
  this.speed = mph/36000;
  this.time = 0;
  this.report();
  setInterval(function () {
    that.time += 1;
    that.report();
  }, 100);
};

ES5Car.prototype.report = function () {
  let distance = Math.round(this.time * this.speed * 1000)/1000;
  console.log(this.car + '  (' + distance + ' miles)');
};

/**
 * Try it out.
 */

new ES5Car(60);
