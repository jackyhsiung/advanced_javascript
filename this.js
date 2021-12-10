// this 
// 1. gives methods access to their objects (who invokes the function)
const obj = {
  name: 'Jojo',
  speak: function () {
    return 'I am ' + this.name
  }
}

obj.speak()

// 2. reuse same code for multiple objects
function speak() {
  return this.name
}
const name = 'Allen'
const obj1 = {
  name: 'Bob',
  speak: speak
}
const obj2 = {
  name: 'Chris',
  speak: speak
}

console.log(speak())
console.log(obj1.speak())
console.log(obj2.speak())

// this is dynamic scoped
const obj = {
  name: 'Billy',
  sing: function() {
    console.log(this) // in this case, it's a method on an object.
    var anotherFunc = function() {
      console.log(this)// this points to windows!
    }
    anotherFunc()
  }
}

// solution 1 create a reference to the this we want
const obj = {
  name: 'Billy',
  sing: function() {
    console.log(this) // in this case, it's a method on an object.
    var anotherFunc = function() {
      console.log(ref)// this points to windows!
    }
    anotherFunc()
  }
}

// solution 2 bind
const obj = {
  name: 'Billy',
  sing: function() {
    console.log(this) // in this case, it's a method on an object.
    var anotherFunc = function() {
      console.log(this)// this points to windows!
    }
    anotherFunc = anotherFunc.bind(this)
    return anotherFunc()
  }
}

// call, apply, bind
const wizard = {
  health: 30,
  heal() {
    this.health = 100
  }
}

const warrior = {
  health: 50,
}

wizard.heal()
console.log(wizard.health)
wizard.heal.call(warrior)
console.log(warrior.health)