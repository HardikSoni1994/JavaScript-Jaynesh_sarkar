function myName() {
    console.log("Dev. Hardik Soni");
}
myName();

function user(username = 'NULL') {  // default parameter
    console.log(`My Name is ${username}`);
    console.log("I'm a Full Stack Developer.");    
}
console.log("---------------------------");
user("Hardik");
console.log("---------------------------");
user();