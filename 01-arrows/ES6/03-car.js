/**
 * 03-car
 *
 * Tracks the distance a car has traveled over time.
 */

const ES6Car = function (mph) {
  this.speed = mph/36000
  this.time = 0
  this.report()
  setInterval(() => {
    this.time += 1 // Using arrow functions lets us use `this`!
    this.report()
  }, 100)
}

ES6Car.prototype.report = function () {
  let distance = Math.round(this.time * this.speed * 1000)/1000
  console.log('🏎  (' + distance + ' miles)')
}

/**
 * Try it out
 */

new ES6Car(60)