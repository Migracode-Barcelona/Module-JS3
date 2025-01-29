let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];


// ## Expected result

// ```
// QTY     ITEM                TOTAL
// 1       Hot Cakes           2.29
// 2       Apple Pie           2.78
// 1       Egg McMuffin        2.80
// 1       Sausage McMuffin    3.00
// 2       Hot Coffee          2.00
// 4       Hash Brown          1.60

// Total: 14.47
// ```

function printReceipt(){
 
  let sum = 0
  for (const{quantity, itemName, unitPrice}of order) {
    if (quantity){
      let total = unitPrice * quantity
      sum+= total
      console.log(`${quantity}  ${itemName}  ${total.toFixed(2)}`)
     
     
    }
  }
  

 console.log(`Total: ${sum.toFixed(2)}`)
 
}


printReceipt(order)