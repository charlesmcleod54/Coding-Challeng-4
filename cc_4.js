// Task 1
let purchaseAmount = 117;

if (purchaseAmount > 100) {
    let discount = purchaseAmount * 0.15;
    let finalAmount = purchaseAmount - discount;
    console.log('Final amount after discount: $${finalAmount}');
} else {
    console.log('Final Amount: $$ {purchaseAmount}');
}
