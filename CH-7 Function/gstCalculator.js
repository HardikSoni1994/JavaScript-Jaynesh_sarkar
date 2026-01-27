let laptopPrice = 50000;
let gst = 12;
const calculateBill = (price, gst) => {
    let tax = (price * gst) / 100;

    let finalAmount = price + tax;

    return finalAmount;
}

let totalBill = calculateBill(laptopPrice, gst);


console.log("Original Price : ", laptopPrice);
console.log("GST Rate : ", gst + "%");
console.log("----------------------------");
console.log("Total Bill  Amount : ", totalBill);