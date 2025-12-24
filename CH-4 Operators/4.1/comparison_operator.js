let age1 = 17;
age2 = 15;
// comparison operator
console.log(age1 != age2); // false
console.log(age1 == age2); // true
console.log(age1 > age2); // false
console.log(age1 < age2); // false
console.log(age1 >= age2); // true
console.log(age1 <= age2); // true
console.log(age1 === age2); // true

if (age1 >= 18 || age2 >= 18) {
    console.log("You are eligible to vote..");
}
else {
    console.log("You are not eligible for vote..");
    
}
console.log("End of Program");
