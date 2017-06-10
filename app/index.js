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

let king = new Animal("Lion", "4.5");
console.log(king);
console.log(king.hello());
