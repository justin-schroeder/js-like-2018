/**
 * 03-car
 *
 * Tracks the distance a car has traveled over time.
 */

const ES6Car = function (mph, car = '🏎') {
  this.speed = mph/36000
  this.car = car
  this.time = 0
  this.report()
  setInterval(() => {
    this.time += 1
    this.report()
  }, 100)
}

ES6Car.prototype.report = function () {
  let distance = Math.round(this.time * this.speed * 1000)/1000
  console.log(`${this.car}  (${distance} miles)`) // Template strings!
}

/**
 * Try it out
 */

new ES6Car(60)
