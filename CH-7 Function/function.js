function myName() {
    console.log("Dev. Hardik Soni");
}
myName();

function userDetails(username, profession, age) {  // default parameter
    console.log(`My Name is ${username}`);
    console.log(`I am a ${profession}`);
    console.log(`I'm ${age} years old..`);
      
}
console.log("---------------------------");
userDetails("Hardik", "Full Stack Developer", 27);
console.log("---------------------------");
userDetails(); // DEFAULT value passed in argument.(default parameter undefined value passed)

// Addition
function sumOfTwoNUmber(a, b) {
    return a +b; // return value
}
let addition = sumOfTwoNUmber(4, 8);
console.log("sum of value of a + b is equal to", addition);

// Substraction
function substractionOfTwoNUmber(a, b) {
    return a - b;
}
let substraction = substractionOfTwoNUmber(10, 8);
console.log("sum of value of a - b is equal to", substraction);

let ans = sumOfTwoNUmber(sumOfTwoNUmber(5, 10), sumOfTwoNUmber(12, 8));

console.log(ans);
