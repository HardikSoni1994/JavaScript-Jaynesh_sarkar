// Write a Program to print leap years between two given numbers using a while loop.

let year = +prompt("Enter any start year :");
let n = +prompt("Enter any End year :");

while (year <= n) {
   if (year % 4 == 0) {
        document.write(year, " ");
   }
   year ++;
}