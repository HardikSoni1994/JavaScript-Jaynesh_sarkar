let year = prompt("Enter a year:");

year = parseInt(year);

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    document.write(year, " is a leap year.");
} 
else
{
    document.write(year, " is not a leap year.");
}