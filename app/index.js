//  Built in helper methods
let a = "foo" + "o".repeat(50);
console.log(a);

let b = `boo${'o'.repeat(50)}`
console.log(b);

console.log("butterfly".startsWith("butter"));
console.log("butterfly".endsWith("butter"));
console.log("butterfly".includes("butter"));

let infiniteNumber = Infinity;
console.log(Number.isFinite(infiniteNumber));

let finiteNumber = 10;
console.log(Number.isFinite(finiteNumber));

let powNumber = Math.pow(2, 54);
console.log(Number.isFinite(powNumber));
console.log(Number.isSafeInteger(powNumber));
