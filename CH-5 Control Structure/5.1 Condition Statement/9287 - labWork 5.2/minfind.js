let firstNum = +prompt("Enter the value of First Number :");
let secondNum = +prompt("Enter the value of Second Number :");
let thirdNum = +prompt("Enter the value of Third Number :");

if (firstNum < secondNum) {
    document.write(firstNum, " is the smallest number..");
}
else{
    if (secondNum < thirdNum) {
        document.write( secondNum, " is the smallest number..");
    }
    else {
        document.write( thirdNum, " is the smallest number..");
    }
}
