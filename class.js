class Human {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log('Hello, I am ' + this.name);
  }
}


const john = new Human('John')
john.greet()