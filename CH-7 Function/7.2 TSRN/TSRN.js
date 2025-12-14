document.write("<h4>Hello TSRN function.</h4>")

let a = parseInt(prompt("Enter Value of a :"));
let b = parseInt(prompt("Enter Value of b :"));

function addition(a, b) {
    // console.log(typeof a);
    
    // document.write(`${a} + ${b} = ${a + b}<br>`);

    if (typeof a == "number" && typeof b == "number") {
         document.write(`${a} + ${b} = ${a + b}<br>`);
    }
}
addition(a, b);