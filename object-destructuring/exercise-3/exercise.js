let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

let totalCost = 0;

console.log("QTY     ITEM                TOTAL");

// Loop through each item in the order
for (let i = 0; i < order.length; i++) {
  let item = order[i];
  let itemTotal = item.quantity * item.unitPrice;
  totalCost += itemTotal; // Add the item's total cost to the overall total

  // Print out the item information
  console.log(
    `${item.quantity}       ${item.itemName.padEnd(20)} ${itemTotal.toFixed(2)}`
  );
}

// Print out the final total
console.log(`\nTotal: ${totalCost.toFixed(2)}`);
