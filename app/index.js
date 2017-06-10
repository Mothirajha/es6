// Modules (keywords - imports and exports)
import add from './calculation.js';
// import {add, sub} from './calculation.js'

console.log(add(1, 3));
// console.log(sub(1, 3));

import Dog from './dog';


let inherit = new Dog('Tommy', 2.2, "yellow");
console.log(inherit);
inherit.hello();
