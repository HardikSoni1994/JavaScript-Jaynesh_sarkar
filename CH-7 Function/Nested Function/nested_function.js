document.write("<h3>Hello Nested Function...!</h3>");

ram();
ram();
function ram() {

    document.write("Hello Ram  !!<br>");

    shyam(); // Nested Function..
}

function shyam() {
    
    document.write("Hello Shyam !!<br>");

    krishna();
}

function krishna() {
    
    document.write("Hello Krishna !!<br>");
}

