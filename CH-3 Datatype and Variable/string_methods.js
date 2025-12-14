let message = "mitansh atmikbhai Soni";

console.log(message.trim());
console.log(message.length);
console.log(message.trim().length);
console.log(message.trimStart().length);
console.log(message.trimEnd().length);
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.includes("h"));
console.log(message.indexOf("M"));
console.log(message.indexOf("soni")); //shows -1 because it is case sensitive
console.log(message.replace("hardik", "Hello")); // replace is used to replace only the first occurrence of a substring
console.log(message.replaceAll("a", "A")); // replaceAll is used to replace all occurrences of a substring

let username = "Hardik kamleshbhai";
surname = "soni";

console.log(username.concat(" ", surname, " welcome to js world")); // concat is used to concatenate two or more strings

let lastFourdigit = '78';
console.log(lastFourdigit.padStart(8, '*')); // padStart is used to pad the string from the start to a certain length

console.log(lastFourdigit.padEnd(8, '*')); // padEnd is used to pad the string from the end to a certain length

console.log(username.charAt(0)); // charAt is used to get the character at a specific index

console.log(username.charCodeAt(1));

console.log(username.split(' '));

console.log(`My Name is ${username} ${surname}`); // templete literals

const bankBalance = 5000;

console.log(`I have ₹${bankBalance} in my Bank Account`);


