const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  let result = 0;
  for (array of products) {
    if (array.name === productName) {
      result = array.price * array.quantity;
    }
  }
  return result;
}

calculateTotalPrice(products);
