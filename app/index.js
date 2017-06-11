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

// Function factories

const addSuffix = (x) => {
  const concat = (y) => {
    return y + x;
  }
  return concat;
}

let addNess = addSuffix("ness");
console.log(addNess);
let result = addNess("Happi");
console.log(result);

// const claci = (x) => {
//   return (y) => {
//     return x * y;
//   }
// }
const claci = (x) => (y) => x * y

const double = claci(2);
const triple = claci(3);

console.log(double(5));
console.log(triple(5));

// Private methods

const budget = () => {
  let balance = 0;
  let changeBal = (val) => balance += val;

  const deposit20 = () => changeBal(20);
  const withdraw20 = () => changeBal(-20);
  const check = () => balance;

  // return {
  //   deposit20: deposit20,
  //   withdraw20: withdraw20,
  //   check: check
  // }
  return { deposit20, withdraw20, check }
}

let wallet = budget();
console.log(wallet);
console.log(wallet.deposit20());
console.log(wallet.withdraw20());
console.log(wallet.balance);
console.log(wallet.deposit20());
console.log(wallet.deposit20());
console.log(wallet.check());


// Generators

function* letterMaker() {
  yield 'a';
  yield 'b';
  yield 'c';
}

let letterGen = letterMaker();
console.log(letterGen);
console.log(letterGen.next().value);
console.log(letterGen.next().value);
console.log(letterGen.next().value);


function* countMaker(){
  let count = 0;
  while (count < 3) {
    yield count += 1;
  }
}

let counter = countMaker();
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);

// Reset Generator values

function* events() {
  let count = 0;
  while (true) {
    count = count + 2;
    let reset = yield count;
    if (reset){
      count = 0;
    }
  }
}

let event = events();
console.log(event);
console.log(event.next().value);
console.log(event.next().value);
console.log(event.next().value);
console.log(event.next(true).value);
console.log(event.next(false).value);


// Iterators - Clousures

const arrayIterator = (array) => {
  let index = 0;
  return {
    next: () => {
      if (index < array.length) {
        let next = array[index];
        index = index + 1;
        return next;
      }
    }
  }
}

let arr = [1,2,3,4]
let loopArray = arrayIterator(arr);
console.log(loopArray);
console.log(loopArray.next());
console.log(loopArray.next());
console.log(loopArray.next());
console.log(loopArray.next());
// console.log(loopArray.next());

// Generators
function* garrayIterator() {
  yield* arguments;
  // for (let arg of arguments) {
    // yield arg;
  // }
}

// let garr = []
let gloopArray  = garrayIterator(1,2,3,4);
console.log(gloopArray);
console.log(gloopArray.next().value);
console.log(gloopArray.next().value);
console.log(gloopArray.next().value);
console.log(gloopArray.next().value);


// Asynchronous - Promises - 'pending', 'fulfilled', 'rejected'
let p = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolved promise data"), 1000 );
  // reject("Reject promise data");
})
console.log(p);
p.then(response => console.log(response))
 .catch(error => console.log(error));
console.log("After promise consumption");
