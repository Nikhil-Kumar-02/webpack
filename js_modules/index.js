/**  
this file call functions from sum.js.... then prints the result
since this index files uses some amount of code in sum.js file 
so index.js file depends on sum.js file (sum.js -> index.js)
first sum.js should be rendered and then index.js should render

*/

const sum = require('./sum');

const total = sum(3,4);
console.log(total);