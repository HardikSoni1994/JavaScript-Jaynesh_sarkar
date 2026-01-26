let num = 28;
let sum = 0;

while (num > 9) {
    sum = 0;

    while (num > 0) {
        let digit = num % 10;
        sum += digit;
        num = Math.floor(num / 10);
    }
    num = sum;
}
if (num === 1) {
    console.log(num ,"is magic number");
}
else {
    console.log(num, "is  not magic number");
}