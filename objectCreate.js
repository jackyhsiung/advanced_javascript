const a = {
  name: 'a',
  weapon: 'sword',
  attack() {
    console.log('attack with ' + this.weapon)
  },
  greet() {
    console.log('Hello, I am ' + this.name)
  }
}

const b = Object.create(a)
b.attack()
b.greet()
b.name = 'b'
b.greet()
a.greet()
console.log(b.__proto__)