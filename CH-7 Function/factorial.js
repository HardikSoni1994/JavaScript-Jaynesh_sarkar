let num = 8;
let ans = getFactorial(num);

function getFactorial(num) {
    let result = 1;

    for(let i = num; i > 1; i--) {
        result = result * i;
    }
    return result;
}
console.log("Factorial of", num, "is: ", ans);
