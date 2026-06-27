/**  
this file call functions from sum.js.... then prints the result
since this index files uses some amount of code in sum.js file 
so index.js file depends on sum.js file (sum.js -> index.js)
first sum.js should be rendered and then index.js should render


this file is the entry point for the project as it only imports the code
and doesnt export and modules


*/

// import sum from "./sum"
// import "./image_viewer"

// const total = sum(3,4);
// console.log(total);

const button = document.createElement("button");
button.innerText = "Click Me!";

button.onclick = () => {
  import("./image_viewer").then(module => {
    console.log(module)
  })
}

document.body.appendChild(button);