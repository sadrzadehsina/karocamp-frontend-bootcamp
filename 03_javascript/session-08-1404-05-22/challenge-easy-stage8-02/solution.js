// JSON
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 999,
    count: 1,
    category: "Electronics",
    specs: { brand: "Dell", ram: "16GB", storage: "512GB SSD" },
  },
  {
    id: 2,
    name: "T-Shirt",
    price: 25,
    count: 2,
    category: "Clothing",
    specs: { size: "M", color: "Blue", material: "Cotton" },
  },
];

const maxInventoryNumber = 100;

function createDummyProduct() {
  return {
    id: products.length + 1,
    name: "PC",
    price: 1000,
    count: 10,
    category: "Electronics",
    specs: { brand: "ASUS", ram: "16GB", storage: "512GB SSD" },
  };
}

function addProduct(product) {
  products.push(product);
}

function removeProduct(productId) {
  const index = products.findIndex((product) => product.id === productId);

  if (index === 0) {
    // unshift
  }

  if (index === products.length - 1) {
    // pop
  }

  products.splice(index, 1);
}

function updateCount(productId, newCount) {
  return products.map((product) => {
    if (product.id === productId) {
      if (newCount < maxInventoryNumber) {
        // update quantity
        return {
          ...product,
          count: newCount,
        };
      }

      console.error("count is gt max inventory number");
    }

    return product;
  });
}

function calculateTotal(products) {
  return products.reduce((sum, product) => {
    return sum + (product.price * product.count);
  }, 0);
}

addProduct(createDummyProduct());
addProduct(createDummyProduct());
addProduct(createDummyProduct());

removeProduct(2);
removeProduct(4);

const newProducts = updateCount(5, 20);

console.log("Shopping Card", products);
console.log("New Shopping Card", newProducts);
console.log("Total Price", calculateTotal(newProducts));
