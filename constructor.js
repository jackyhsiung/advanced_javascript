function Superhero(name, power) {
  this.name = name;
  this.power = power;
  
  // the below method can not be inherited
  // and it is not shared across the instances
  // if we have 2 instances then we could create two attack function
  // this.attack = function() {
  //   return 'attack with ' + this.power
  // }
}

Superhero.prototype.attack = function() {
  return 'attack with ' + this.power
}

// should not use arrow function
// since arrow function is lexically scoped
// Superhero.prototype.attack = () => {
//   return 'attack with ' + this.power
// }

const spiderman = new Superhero('Peter Parker', 'web')

console.log(spiderman.power)
console.log(spiderman.attack())
console.log(Superhero.prototype)

console.log(spiderman instanceof Superhero)
console.log(Superhero instanceof Function)


class Supervillian {
  constructor(name, power) {
    this.name = name;
    this.power = power;
  }

  attack() {
    console.log('evil attack with ' + this.power)
  }
}

const joker = new Supervillian('unknown', 'laugh gas')
joker.attack()