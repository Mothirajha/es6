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

// DataStructures //

// Sets
let set = new Set();
set.add(1);
set.add("Test");
set.add([1,2,3]);
set.add({x: 10, y: 20});
console.log(set);
console.log(set.size);
console.log(set.has(1));
console.log(set.has(10));

let number = [1, 12, 32, 343, 121]
let numSet = new Set(number);
console.log(number);
for (let element of numSet.values()) {
  console.log(element);
}
let alpha = "adfadfhasdofasdfasldfhaiigfwihrisdgfhasdfgasdfasdgahsfgda";
let splitAlpha = alpha.split("");
let alphaSet = new Set(splitAlpha);
console.log(alphaSet);


// Maps
let map = new Map();
let key1 = "String Key";
let key2 = {a: "funny"};
let key3 = function () {
  return "getLast";
}
map.set(key1, 'return value for a string key');
map.set(key2, 'return value for a object');
map.set(key3, 'return value for a function')
console.log(map);


let numArr = [[1, 'one'], [2, 'two'], [3, 'three']];
let mapnumArr = new Map(numArr);
console.log(mapnumArr);

for (let element of numArr.entries()) {
  console.log(element);
}

for (let [key, value] of numArr.entries()) {
  console.log(key, value);
}


let letters = new Map();
for (let i = 0; i < alpha.length; i++) {
  let letter = alpha[i];
  if (letters.has(letter)) {
    letters.set(letter, letters.get(letter) + 1 )
  } else {
    letters.set(letter, 1)
  }
}
console.log(letters);
console.log(letters.get("a"));

// Clousures
let call = () => {
  let secret = "Funny language";
  let reveal = () => {
    console.log(secret);
  }
  return reveal;
}

console.log(call());
let unveil = call();
unveil();
