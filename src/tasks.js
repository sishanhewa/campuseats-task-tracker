// CampusEats task list

const tasks = [
  "Design the menu screen",
  "Build the orders API",
  "Add user login",
];

console.log(`CampusEats has ${tasks.length} open tasks`);

const VIP_DISCOUNT = 0.1;

function calculateTotal(price, quantity, customerType) {
  if (!Number.isFinite(price) || !Number.isFinite(quantity)) {
    throw new TypeError("price and quantity must be numbers");
  }

  if (price < 0 || quantity < 0) {
    throw new RangeError("price and quantity must be >= 0");
  }

  const subtotal = price * quantity;
  return customerType === "vip"
    ? subtotal * (1 - VIP_DISCOUNT)
    : subtotal;
}

// API keys are read from environment variables or a managed secrets store.
// They are never hard-coded or committed to Git.

module.exports = { calculateTotal, tasks };
