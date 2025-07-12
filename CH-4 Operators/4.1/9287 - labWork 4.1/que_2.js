// Write a Program to Swap two variables without using the third variable.

document.write("<br><br>Let's write a program to find a swap Two Variable without using Third Variable..<br><br>");

let a = +prompt("Enter the value of a :");
let b = +prompt("Enter the value of b :");

document.write("A :", a, "<br>");
document.write("B :", b, "<br><br>");

a = a + b;
b = a - b;
a = a - b;

document.write("A :" + a + "<br>");
document.write("B :" + b + "<br>");