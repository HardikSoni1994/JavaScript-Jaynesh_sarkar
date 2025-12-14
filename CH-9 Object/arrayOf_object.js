const user = {
    'userName' : "Hksoni",
    'Email' : "soni.hardik994@gmail.com",
    'password' : 1278643,
    'phone' : 8866299606,
    'Gender' : "Male",
    'Age' : 25,
    'isActive' : true


}
for (const key in user) {
    // console.log(key, ":", user[key]);
    document.write(`<li>${key} : ${user[key].toUpperCase()}</li>`)
}

let username = document.getElementById('res');
username.innerText = user.userName;

const alluser = [
    {
    'userName' : "Hksoni",
    'Email' : "soni.hardik994@gmail.com",
    'password' : 1278643,
    'phone' : 8866299606,
    'Gender' : "Male",
    'Age' : 25,
    'isActive' : true
    },
    {
    'userName' : "Hari",
    'Email' : "hari994@gmail.com",
    'password' : 1278643,
    'phone' : 8866799606,
    'Gender' : "Male",
    'Age' : 21,
    'isActive' : true
    },
    {
    'userName' : "raj",
    'Email' : "soni.raj994@gmail.com",
    'password' : 1278643,
    'phone' : 8866291453,
    'Gender' : "Male",
    'Age' : 27,
    'isActive' : true
    },
];

for (const user of alluser) {
   for (const key in user) {
   if (typeof user[key] == "string" && key == 'username') {
        document.write(`<li>${key} : ${user[key].toUpperCase()}</li>`);
   } else {
        document.write(`<li>${key} : ${user[key]}</li>`);
   }
   }
   document.write("........................................");
   
   }
