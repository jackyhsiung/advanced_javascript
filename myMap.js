Array.prototype.myMap = function(callbackFn, thisArg) {
  const length = this.length
  const result = new Array(length)
  for (let i=0; i<length; i++) {
    if (i in this) {
      // It is not called for missing elements of the array; that is:
      // indexes that have never been set;
      // indexes which have been deleted.
      result[i] = callbackFn.call(thisArg, this[i], i, this)
    }
  }

  return result
}

console.log([1, 2, 3].map(num => num * 2))

function callbackFn(item) {
  return item + this.extraValue
}

const calculator1 = {
  extraValue: 1
}

const calculator2 = {
  extraValue: 2
}

console.log([1, 2, 3].map(callbackFn, calculator1))
console.log([1, 2, 3].map(callbackFn, calculator2))
