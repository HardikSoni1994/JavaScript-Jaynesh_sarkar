document.write("Let's find a Simple Interest..<br><br>");

let p = +prompt(" Enter the value of principal :");
let r = +prompt(" Enter the value of rate :");
let n = +prompt(" Enter the value of time :");

document.write(" Total Amount of Interest is :" + (p * r * n) / 100);