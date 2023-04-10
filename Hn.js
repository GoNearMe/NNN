const orders = [
    { product: "Telephone", quantity: 5, price: 1000 },
    { product: "TV", quantity: 1, price: 10000 },
    { product: "PC", quantity: 2, price: 100000 },
  ];


function calculateTotalOrderCost(orders) {
  let totalCost = 0;
  for (let i = 0; i < orders.length; i++) {
     const order = orders[i];
     const quantity = order.quantity;
     const price = order.price;
     totalCost += quantity * price;
  }
  return totalCost;
}

const totalCost = calculateTotalOrderCost(orders);
console.log(`Загальна ціна товарів: ${totalCost}`); 
  