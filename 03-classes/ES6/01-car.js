/**
 * 03-car
 *
 * Syntactic sugar for prototype classes.
 */

class ES6Car {
  constructor (mph, car = '🏎') {
    this.speed = mph/36000
    this.car = car
    this.time = 0
    this.report()
    setInterval(() => {
      this.time += 1
      this.report()
    }, 100)
  }

  report () {
    let distance = Math.round(this.time * this.speed * 1000)/1000
    console.log(`${this.car}  (${distance} miles)`)
  }
} 

/**
 * Try it out
 */

new ES6Car(60)
