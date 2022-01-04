function Person(name, age) {
  this.name = name
  this.age = age
}

const peter = new Person('Peter', 16)

console.log(peter.__proto__)

Person.prototype.greet = function() {
  console.log('Hello, I am ' + this.name)
}

console.log(peter.__proto__)
peter.greet()

/**
 * @param {Function} constructor
 * @param {any[]} args - argument passed to the constructor
 * `myNew(constructor, ...args)` should return the same as `new constructor(...args)`
 */
 const myNew = (constructor, ...args) => {
  // your code here
  const obj = Object.create(constructor.prototype)
  const res = constructor.apply(obj, args)
  if (res && typeof(res) === 'object') {
    return res
  } else {
    return obj
  }
}

const mj = myNew(Person, 'MJ', 16)
mj.greet()