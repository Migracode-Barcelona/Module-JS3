let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function order_receipt(order) {
  console.log("Qnt     ITEM                UNIT PRICE");
  let totalPrice = 0;

  order.forEach(({ itemName, quantity, unitPrice }) => {
    const itemTotal = quantity * unitPrice;
    totalPrice += itemTotal;
    console.log(
      `${String(quantity).padEnd(8)}${itemName.padEnd(20)}${unitPrice.toFixed()}`
    );
  });

  console.log(`\nTotal: ${totalPrice.toFixed(2)}`);
}
order_receipt(order);