console.log("Hello world");
const numbers = [1,2,2,23,3];
numbers.push(100);
console.log(numbers);
// const doesn't allow to assign variables again but can be updated.


// Example - Block scoping
let limit = 100;

{
  let limit = 10;
  console.log('Back stage limit ',limit);
}

console.log('Overall stage limit ',limit);


var vlimit = 100;

{
  var vlimit = 10;
  console.log('Back stage vlimit ',vlimit);
}

console.log('Overall stage vlimit ',vlimit);


const climit = 100;

{
  const climit = 10;
  console.log('Back stage climit ',climit);
}

console.log('Overall stage climit ',climit);


function hello() {
  let message = "Hello world!";
  console.log(message);
}

function greeting() {
    let message = "How r you ?";
    console.log(message);
}

hello();
greeting();
