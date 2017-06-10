// Modules (keywords - imports and exports)
import add from './calculation.js';
// import {add, sub} from './calculation.js'

console.log(add(1, 3));
// console.log(sub(1, 3));

// Class Example
import Dog from './dog';

let inherit = new Dog('Tommy', 2.2, "yellow");
console.log(inherit);
inherit.hello();


// Static Methods

class Calculator {
  static multiply(a, b){
    return a*b;
  }

  static add(a, b){
    return a+b;
  }
}

let a = Calculator.multiply(10, 2);
console.log(a);
let b = Calculator.add(10, 2);
console.log(b);
