import random from './random.js'

console.log('random.getRandomSeed() :', random.getRandomSeed())
console.log('random.chance(0.5) : ', random.chance(0.5))
console.log('random.range(-2, 2) : ', random.range(-2, 2))
console.log('random.rangeFloor(-2, 2) : ', random.rangeFloor(-2, 2))
console.log(
  'random.pick([0, 1, 2, 3, 4, 5]) :',
  random.pick([0, 1, 2, 3, 4, 5])
)
console.log(
  'random.shuffle([0, 1, 2, 3, 4, 5]) :',
  random.shuffle([0, 1, 2, 3, 4, 5])
)
console.log('random.boolean() :', random.boolean())
console.log('random.sign() :', random.sign())
