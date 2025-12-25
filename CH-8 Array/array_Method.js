document.write("<h3>Array Built-in Methods</h3>");

let car = ["BMW", "Audi", "Tata", "Hyundai", "Toyota"];
let bike = ["Honda", "TVS", "Hero", "Yamaha"];
car.length;      // length: find the size of Array
car.push("Kia"); // push(): add element in last index
car.pop();       // pop(): Remove last element from index
car.shift();     // shift(): Remove element from starting of array
car.unshift();   // unshift(): Add New element in starting of array
car.concat();    // merge any Two array and create new Array
car.indexOf();   // find the index of element and return the index
car.includes();  // Enter element is include in Array or not and return true or false
car.reverse();   // Reverse the full Array from last element to first element
car.sort();      // sort the array in Alphabatic 
car.splice();    // update element into Array
console.log(car);

let newArray = car.concat(bike);
console.log(newArray);


