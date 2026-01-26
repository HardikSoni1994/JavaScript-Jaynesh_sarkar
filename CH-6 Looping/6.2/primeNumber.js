let num = 10;
let isPrime = true;

for(let i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}
 if (isPrime) {
        console.log(num, "is Prime number");
    }
    else {
        console.log(num, "is Not a Prime Number");
    }