 let a = +prompt("Enter A Value:"); // 10
 let b = +prompt("Enter B Value:"); // 20

// console.log(typeof a);
// console.log(typeof b);
document.write(`A: ${a} <br> B: ${b} <br><br>`);

// using third variable
// let c = a;  // c = 10
// a = b;      // a = 20
// b = c;      // b = 10

// without using third variable (+ -)

// a = a + b; // a = 10 + 20 = 30
// b = a - b; // b = 30 - 20 = 10
// a = a - b; // a = 30 - 10 = 20

// with using (* /) operator

// a = a * b; // a = 10 * 20 = 200
// b = a / b; // b = 200 / 20 = 10
// a = a / b; // a = 200 / 10 = 20

// using destucting assignment operator

[a, b] = [b, a]; // [a, b] = [20, 10] 
                //  [b, a] = [10, 20]

document.write(`A: ${a} <br> B: ${b} <br><br>`);