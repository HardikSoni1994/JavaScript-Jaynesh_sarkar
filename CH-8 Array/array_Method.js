document.write("<h3>Array Built-in Methods</h3>");

const car = ["BMW", "Audi", "Tata", "Hyundai", "Toyota"];

// const car = new Array("BMW", "Audi", "Tata", "Hyundai", "Toyota")

console.log("IndexOf : ", car.indexOf("Tata"));

console.log(car);
// console.log(car.push("Kia"));

// For loop
for (let i = 0; i < car.length; i++) {
   console.log(`car[${i}] : ${car[i]}`);
}

// For of loop (Array)
/* syntax :
    for(let variable_Name of Array) {
    }
*/

// for (let element of car) {
//     let index = car.indexOf(element);
//     document.write(`<li>car[${index}] = ${element}</li>`);
// }

function myMethod(element, index) {
    document.write(`<li>car[${index}] = ${element}</li>`);

}

// ForEach

car.forEach(myMethod);

// For In loop (object)