let num = 12345;
let sum = 0;

while (num > 0) {
    let digit = num % 10; // last digit remove
    sum = sum + digit; // new digit add
    num = Math.floor(num / 10);
}
console.log("Sum of Digits is: ", sum);

