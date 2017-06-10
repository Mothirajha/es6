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

// Static Class Method - Example
import Calculator from './calculator'

let a = Calculator.multiply(10, 2);
console.log(a);
let b = Calculator.add(10, 2);
console.log(b);

// Prototypes
import Wizard from './wizard'

Wizard.prototype.petName;

// For prototype arrow function does not call this method - normal function call is best while writing prototype
// Wizard.prototype.info = () => `I have ${this.pet} named ${this.petName}`;

Wizard.prototype.info = function () {
  return `I have ${this.pet} named ${this.petName}`
};
let harry = new Wizard("Harry", "Gryffindor", "Owl");
harry.petName = "Hedwig";
console.log(harry);
console.log(harry.info());
