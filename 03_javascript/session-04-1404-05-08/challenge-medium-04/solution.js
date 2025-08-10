// Challenge Medium 04: Restaurant Menu System
// Your code here

// Global variables
let restaurantName = "Code Café";
let totalSales = 0;

// Create your functions here
function getItemPrice(item) {
    // Add your switch statement here
    switch (item) {
        case "burger":
            return 12.99;
        case "pizza":
            return 15.99;
        default:
            return 0;
    }
}

function processOrder(customerName, items) {
    // Add your code here
    console.log("Order for:", customerName);
    let sum = 0;
    items.forEach(item => {
        console.log(`- ${item}: $`, getItemPrice(item));
        sum += getItemPrice(item);
    });
    console.log(`Total: $${sum}`);
    console.log("------------------")
}

// Test orders
processOrder("John", ["burger", "coffee"]);
processOrder("Sarah", ["pizza", "salad", "cake"]);
processOrder("Mike", ["coffee", "cake", "unknown"]);

// Show daily sales
console.log("Daily Sales: $" + totalSales.toFixed(2));
