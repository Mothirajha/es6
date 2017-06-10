// Modules (keywords - imports and exports)
import add from './calculation.js'
// import {add, sub} from './calculation.js'

console.log(add(1, 3));
// console.log(sub(1, 3));


//Class
class Animal {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }

  hello(){
    console.log(`Hi I'am ${this.name} from Animal class`);
  }
}

// let king = new Animal("Tommy", "4.5");
// console.log(king);
// console.log(king.hello());


class Dog extends Animal {
  constructor(name, height, color) {
    super(name, height);
    this.color  = color;
  }
  hello(){
    console.log(`Hi I'am ${this.name} from Dog class with coloer ${this.color}`);
  }
}

let inherit = new Dog('Tommy', 2.2, "yellow");
console.log(inherit);
console.log(inherit.hello());
