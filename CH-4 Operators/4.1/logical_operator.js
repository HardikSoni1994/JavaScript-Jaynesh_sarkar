// &&  AND operator
// ||  OR operator
// !  Not operator

let age = 25;

console.log(age > 18 && age < 30); // true && true => true
console.log(age > 18 && age < 20); // true && false => false

console.log(age < 17 || age > 17); // false || true => true
console.log(age < 17 || age < 20); // false || false => false

console.log('' || "Hello"); // false || true => "Hello"

let OrResult = 'Hello' && console.log("hello"); // true && true => hello
let andResult = undefined || console.log("Hello"); // false || true => Hello

console.log(!true); // false
console.log(!false); // true

