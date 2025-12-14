document.write("<h3>Let's start practice of Array</h3>")
let array = [10, 20, 30, 89.53, true, "soni"];
// index =  0   1   2   3      4      5

// console.log(array);

// console.log(array[1]);
// console.log("Array Length : ",array.length);

// let a = ["Hello"];
// console.log(a[0][3]);

// let fruits = ["Apple", "Banana", "Kiwi", 20];
// console.log(fruits);

// for (let i = 0; i < 6; i++) {
//     console.log(array[i]);
// }

// Array built-in method

// 1. push - add element last and retrn array length
    // syntax : push(element);


// let element = [10, 20, 30, 40, 50]; 
// element.push(60, "Hello Javascript");   // [10, 20, 30, 40, 50, 60, "Hello Javascript"];
// console.log(element.push(70));

// 2. pop - remove last element

// let array1 = [10, 20, 30, 89.53, true, "soni"];
// console.log(array1);
// console.log("Pop return value : ", array1.pop());
// console.log("pop : ", array1);

// 3. at
// let array1 = [10, 20, 30, 89.53, true, "soni"];
// console.log("Array Element : ", array1.at(4));

// 4. join : return space or string in between each element
// let array1 = [10, 20, 30, 89.53, true, "soni"];
// console.log("Join Element : ", array1.join(" "));

// 5. reverse : arrange element in reverse direction

// let array1 = [10, 20, 30, 89.53, true, "soni"];
// console.log("Array Reverse Element : ", array1.reverse());


// console.log("Main Array : ", array1);
// array1[2] = 87;
// console.log("New Element Update : ", array1);

// console.log("Main Array : ", ...array1);

// 6. spread Operator

// let numbers = [10, 20, 30, 40, 50];
// let newNumbers = [...numbers, 60, 70, 80];
// console.log("numbers : ", newNumbers);

// 7. shift : remove first element.
// array.shift()
// console.log("Shift : ", array);

// 8. unshift : to add element at first index

// array.unshift("Hardik")
// console.log("Unshift : ", array);

// 9. toString : convert to  string.
// console.log("string Convert : ", array.toString());
// console.log(array);

// 10. slice : 
// let cities = ["surat", "rajkot", "Navsari", "Bardoli", "Vadodara"];
// //index =       0           1       2           3           4
// console.log("All Cities : ", cities);
// cities.slice();
// console.log("slice : ", cities.slice(2, 3));

// 11. split :

// const name = "Hardik Soni is Web Developer";
// console.log("Name : ", name.slice(0, name.length));
// console.log("Split :", name.split(" "));

