document.write("<h3>Hello TSRS Function..!</h3>");

let first = +prompt("Enter First Number : ");
let Second = +prompt("Enter Second Number : ");


function multiply(first, Second) {

    return first * Second;
}
document.write(`${first} * ${Second} = ${multiply(first, Second)}`);