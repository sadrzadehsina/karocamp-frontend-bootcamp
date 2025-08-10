const numbers = [1,2,3];

numbers.reduce((sum, number) => {
  return sum + number;
}, 0);

const products = [
  { name: "Laptop", price: 800, discount: 0.1 },
  { name: "Phone", price: 500, discount: 0.2 },
  { name: "Tablet", price: 300, discount: 0.15 },
];

const newProducts = products.filter(product => {
  return product.price > 300
}).map(product => {
  const discount = product.price * product.discount;
  const finalPrice = product.price - discount;
  return {
    name: product.name,
    finalPrice: finalPrice,
    savings: discount,
    description: `${product.name} - Save $${discount}! Final price: $${finalPrice}`
  }
}).reduce((sum, product) => {
  return sum + product.finalPrice;
}, 0)

console.log(newProducts);

/*
[
  {
    name: "Laptop",
    finalPrice: 720,
    savings: 80,
    description: "Laptop - Save $80! Final price: $720"
  },
  // ... other products
]
*/