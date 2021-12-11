const vampire = {
  name: 'Vladimir',
  greet() {
    console.log('Hello, I am ' + this.name)
  }
}

const dragon = {
  name: 'Lisa'
}

vampire.greet.call(dragon)
const dragonGreet = vampire.greet.bind(dragon)
dragonGreet()
// implement bind 
Function.prototype.bind = function() {
  // to do
}