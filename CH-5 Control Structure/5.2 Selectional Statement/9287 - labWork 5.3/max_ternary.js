// Write a Program to find the maximum number from the given 3 numbers using the ternary operator


    let firstNumber = +prompt("Enter the Value of First Number :");
    let secondNumber = +prompt("Enter the Value of Second Number :");
    let thirdNumber = +prompt("Enter the Value of Third Number :");

    (firstNumber > secondNumber)
        ? (firstNumber > thirdNumber) ? document.write(firstNumber, " is max..")
        : document.write(thirdNumber, " is max...")
        : (secondNumber > thirdNumber) ? document.write(secondNumber, " is max..")
                :document.write(thirdNumber," is max..");
