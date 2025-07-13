let fnum = prompt("Enter first number :");
snum = prompt("Enter second number :");

if (fnum > snum) {
    document.write(fnum, " is the Maximum number");
}
else if (fnum < snum) {
    document.write(snum, " is the maximum number");
}
else
{
    document.write("Both Numbers are equal");
}