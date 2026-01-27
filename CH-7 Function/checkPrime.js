function checkPrime(num) {
    if (num < 2) {
        return false;
    }
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}
let number = 10;
if(checkPrime(number) === true) {
    console.log(number, "is prime Number.");
} 
else {
    console.log(number, "is not Primer number.");
}