
console.log("Welcome to telcom Service..");
console.log("Press 1 for English");
console.log("Press 2 for Hindi");
console.log("Press 3 for Gujarati");

let choice = parseInt(prompt("Enter your choice :"));

switch (choice) {
    case 1:
        console.log("\nPress 1 for Internet Recharge");
        console.log("Press 2 for Top-up Recharge");
        console.log("Press 3 for Special Recharge");
        let choice = parseInt(prompt("Enter your choice :"));
        switch (choice) {
            case 1:
                console.log("You have successfully done an Internet Recharge.");
                break;
            case 2:
                console.log("You have successfully done a Top-up Recharge.");
                break;
            case 3:
                console.log("You have successfully done a Special Recharge.");
                break;
            default:
                console.log("Invalid Recharge Option.");
        }
        break;

    case 2:
        console.log("\nInternet Recharge ke liye 1 dabaiye");
        console.log("Top-up Recharge ke liye 2 dabaiye");
        console.log("Special Recharge ke liye 3 dabaiye");
        var choice1 = parseInt(prompt("Apna vikalp chune: "));
        switch (choice1) {
            case 1:
                console.log("Aapne safaltapurvak Internet Recharge kar liya hai.");
                break;
            case 2:
                console.log("Aapne safaltapurvak Top-up Recharge kar liya hai.");
                break;
            case 3:
                console.log("Aapne safaltapurvak Special Recharge kar liya hai.");
                break;
            default:
                console.log("Galat Vikalp.");
        }
        break;

    case 3:
        console.log("\nInternet Recharge mate 1 dabavo");
        console.log("Top-up Recharge mate 2 dabavo");
        console.log("Special Recharge mate 3 dabavo");
        var choice3 = parseInt(prompt("Tamaru vikalp pasand karo: "));
        switch (choice3) {
            case 1:
                console.log("Tame safaltapurvak Internet Recharge karyu chhe.");
                break;
            case 2:
                console.log("Tame safaltapurvak Top-up Recharge karyu chhe.");
                break;
            case 3:
                console.log("Tame safaltapurvak Special Recharge karyu chhe.");
                break;
            default:
                console.log("Amanya Vikalp.");
        }
        break;

    default:
        console.log("Invalid choice..");
}
