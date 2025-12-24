document.write("<h3>Let's Do Object Program</h3>")

let student = {
    'Name' : "Hardik",
    'Surname' : "Soni",
    'rollNo' : 21,
    'Age' : 25,
    'class' : "12TH",
    'phone' : 8866299606,
    'Gender' : "Male",
    'Attendence' : true,
    'subjects' : ["c++", "CPP", "JavaScript"],
    hello: () => {
        console.log('Name :', student.Age);   
    }
}

console.log("Name :", student.Name);
console.log("Surname : ", student.Surname);
console.log("rollNo : ", student.rollNo);
console.log("Age : ", student.Age);
console.log("class : ", student.class);
console.log("phone : ", student.phone);
console.log("Gender : ", student.Gender);
console.log("Atteendence : ", student.Attendence ? "Present": "Absenence");
console.log("Subject : ", ...student.subjects);
console.log(student);

Object.seal(student); // not able to add or remove any key:pair value from object.. but can modify the value.
Object.freeze(student); // Not able to add, remove and modify the key:value pair into object.

console.log('rollNo' in student);
console.log('GRID' in student);