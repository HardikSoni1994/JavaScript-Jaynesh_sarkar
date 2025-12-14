document.write("<h3>Hello Recursion !!</h3>");

/*loop(1, 10);
function loop(start, end) {
    if (start <= end) {
        console.log(start++);

        loop(start, end)
    }
}*/

function getfactorial(n) {
    if (n <= 1) 
        return 1;
    else
        return n * getfactorial(n - 1);
    
}
let ans = getfactorial(5);
console.log(ans);
