document.write("<h2>Welcome to Theater..</h2>");
let num = +prompt("Press 1 for Hollywood Movies.\nPress 2 for Bollywood Movies.\nPress 3 for English Movies.");

switch (num) {
    case 1:
        document.write("<h3>Hollywood Movies...</h3>");
        let Choice = +prompt("Hollywood Movies list\n\nPress 1 for watching Jurassic World: Rebirth\nPress 2 for watching F1\nPress 3 for watching Superman\nPress 4 for watching The Monkey\nPress 5 for watching Avatar: Fire and Ash");

        switch (Choice) {
            case 1:
                document.write("Thank you for showing Intrest to watching Jurassic World: Rebirth");
                break;
            case 2:
                document.write("Thank you for showing Intrest to watching F1");
                break;
            case 3:
                document.write("Thank you for showing Intrest to watching Superman");
                break;
            case 4:
                document.write("Thank you for showing Intrest to watching The Monkey");
                break;
            case 5:
                document.write("Thank you for showing Intrest to watching Avatar: Fire and Ash");
                break;
            default:
                alert("Invalid Choice..");
        }
        break;
    case 2:
        document.write("<h3>Bollywood Movies..</h3>");
        let Choice1 = +prompt("Bollywood Movies list\n\nPress 1 for watching Bhool Chuk Maaf\nPress 2 for watching Raid 2\nPress 3 for watching Chhaava\nPress 4 for watching Game Changer\nPress 5 for watching L2: Empuraan");

        switch (Choice1) {
            case 1:
                 document.write("Thank you for showing Intrest to watching Bhool Chuk Maaf");
                break;
            case 2:
                 document.write("Thank you for showing Intrest to watching Raid 2");
                break;
            case 3:
                 document.write("Thank you for showing Intrest to watching Chhaava");
                break;
            case 4:
                 document.write("Thank you for showing Intrest to watching Game Changer");
                break;
            case 5:
                 document.write("Thank you for showing Intrest to watching L2: Empuraan");
                break;
            default:
                document.write("Invalid Choice..");
                break;
        }
        break;
    case 3:
        document.write("<h3>English Movies..</h3>");
        let choice2 = +prompt("Press 1 for Until Down\nPress 2 for G20\nPress 3 for Deep Cover\nPress 4 for The Gorge\nPress 5 for 28 years later");

        switch (choice2) {
            case 1:
                document.write("Thank you for showing Interest to watching Until Down")
                break;
            case 2:
                document.write("Thank you for showing Interest to watching G20");
                break;
            case 3:
                document.write("Thank you for showing Interest to watching Deep Cover");
                break;
            case 4:
                document.write("Thank you for showing Interest to watching The Gorge");
                break;
            case 5:
                document.write("Thank you for showing Interest to watching 28 years later");
                break;
            default:
                document.write("Invalid Choice");
        }
        break;
    default:
        alert(`${num} is Invalid Choice...`);
}