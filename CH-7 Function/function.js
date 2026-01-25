function myName() {
    console.log("Dev. Hardik Soni");
}
myName();

function userDetails(username, profession, age) {  // default parameter
    console.log(`My Name is ${username}`);
    console.log(`I am a ${profession}`);
    console.log(`I'm ${age} years old..`);
      
}
console.log("---------------------------");
userDetails("Hardik", "Full Stack Developer", 27);
console.log("---------------------------");
userDetails(); // DEFAULT value passed in argument.(default parameter undefined value passed)