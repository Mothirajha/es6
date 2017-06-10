// Operating and Destructing Assignment

// Spread Operator - {...}
let a = [20, 30, 40, 50]
let b = [10, ...a, 60]
console.log(b);

// Reset parameters - function(..){};
function collect(...c) {
  console.log(c);
}
collect(1,2,3,4,5,121);


// Destructing Assignments simplifies extracting data on arrays and objects into distinct variables
let x = [4, 5, 6];
let four = x[0];
let five = x[1];
console.log(four, five);
// Checks with index
let y = [1, 2, 3];
let [one, two] = y;
console.log(one, two);

let king = {name: 'Luthur', kids: '3'}
// let name = king.name;
// let kids = king.kids;
// let {n, k} = king;
// console.log(n, k);
// checks with key not with index
let {name, kids} = king;
console.log(name, kids);

let peacock = { type: 'bird', color: "mutli" }
let type, color;
// {type, color} = peacock;
({type, color} = peacock);
console.log(type, color);
