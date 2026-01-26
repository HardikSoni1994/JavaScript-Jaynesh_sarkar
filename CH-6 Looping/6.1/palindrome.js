let original = 121;
let num = original;
let reverseNumber = 0;

while (num > 0) {
    let digit = num % 10;
    reverseNumber = (reverseNumber * 10) + digit;
    num = Math.floor(num / 10);
}
console.log("Original :" + original);
console.log("reverseNumber :" + reverseNumber);

if(original == reverseNumber) {
    console.log(original, "is Palindrome number");
}
else {
    console.log(original, "is not Palindrome number");
}