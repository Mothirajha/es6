// Arrow functions - for anoynumous function
setTimeout(function() {
  console.log("Anoynumous Function executed");
}, 1000);

setTimeout(() => {
  console.log("Arrow Function executed");
}, 2000);

let execute = () => {console.log("Arrow Function as variable");}
execute();
