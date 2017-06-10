// Map

let values = [20,30,40];

let double = (n) => {
  return n*2;
}

// let doubled = values.map(double);

// let doubled = values.map((n) => {
//   return n*2;
// });

let doubled = values.map((n) => n*2);

console.log(doubled);


// Filter
let points = [7, 16, 21, 4, 3, 12, 10, 22, 5];

let highScores = points.filter( (n) => n > 20 );

console.log(highScores);
