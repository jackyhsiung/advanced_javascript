function Superhero(name, power) {
  this.name = name;
  this.power = power;
}

Superhero.prototype.attack = function() {
  return 'attack with ' + this.power
}
const spiderman = new Superhero('Peter Parker', 'web')

console.log(spiderman.power)
console.log(spiderman.attack())