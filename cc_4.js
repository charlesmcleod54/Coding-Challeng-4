// Task 1
let purchaseAmount = 117;

if (purchaseAmount > 100) {
    let discount = purchaseAmount * 0.15;
    let finalAmount = purchaseAmount - discount;
    console.log('Final amount after discount: $${finalAmount}');
} else {
    console.log('Final Amount: $$ {purchaseAmount}');
}
// Task 2
let sales = [120, 85, 200, 150, 90];
let totalSales = 0;

for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
}

console.log('Total sales: $${totalSales}');
// Task 3
let stock = 10;

while (stock >0) {
    console.log('Stock remaining: ${stcok}');
    stock--;
}

console.log("Stock has been depleted.");
// Task 4
let responses = 0;

do {
    console.log('Response count: ${responses}');
    responses++;
} while (responses < 3);

console.log("Survey completed.");
// Task 5
let employee = {
    name: "Alice",
    position: "Manager",
    salary: 75000
};

for (let key in employee) {
    console.log('${key}: ${employee[key]}');
}
