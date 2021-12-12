// implement map
const arr = [1, 2, 3]
const newArr = arr.map(item => item * 2)
console.log(newArr)

Array.prototype.myMap = function(callbackFn) {
  const result = []
  for (let i=0; i<this.length; i++) {
    result.push(callbackFn(this[i]))
  }
  return result
}

const myNewArr = arr.myMap(item => item * 2)
console.log(myNewArr)


// implement reduce
const value = arr.reduce((acc, val) => acc+val, 0)
console.log(value)

Array.prototype.myReduce = function(callbackFn, initialValue) {
  let acc = initialValue
  for (let i=0; i<this.length; i++) {
    acc = callbackFn(acc, this[i])
  }
  return acc
}

const newValue = [1, [2]].myReduce((acc, val) => acc.concat(val), [])
console.log(newValue)

// filter

Array.prototype.myFilter = function(callbackFn) {
  let res = []
  for (let i=0; i<this.length; i++) {
    if (callbackFn(this[i])) {
      res.push(this[i])
    }
  }
  return res
}

console.log(arr.filter(item => item >= 2))
console.log(arr.myFilter(item => item >= 2))