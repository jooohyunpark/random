const getRandomSeed = (n = 8) => {
  return Math.floor(Math.random() * Math.pow(10, n))
}

const chance = (n) => {
  if (typeof n !== 'number') throw new TypeError('expected n to be a number')
  return Math.random() < n
}

const range = (min, max) => {
  if (max === undefined) {
    max = min
    min = 0
  }

  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Expected all arguments to be numbers')
  }

  return Math.random() * (max - min) + min
}

const rangeFloor = (min, max) => {
  if (max === undefined) {
    max = min
    min = 0
  }

  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Expected all arguments to be numbers')
  }

  return Math.floor(range(min, max))
}

const pick = (array) => {
  if (array.length === 0) return undefined
  return array[rangeFloor(0, array.length)]
}

const shuffle = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected Array, got ' + typeof arr)
  }

  var rand
  var tmp
  var len = arr.length
  var ret = arr.slice()
  while (len) {
    rand = Math.floor(Math.random() * len--)
    tmp = ret[len]
    ret[len] = ret[rand]
    ret[rand] = tmp
  }
  return ret
}

const boolean = () => {
  return Math.random() > 0.5
}

const sign = () => {
  return boolean() ? 1 : -1
}

export default {
  getRandomSeed: getRandomSeed,
  chance: chance,
  range: range,
  rangeFloor: rangeFloor,
  pick: pick,
  shuffle: shuffle,
  boolean: boolean,
  sign: sign
}
