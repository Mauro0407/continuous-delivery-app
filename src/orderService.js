function calculateTotal(items, taxRate = 0.15) {
  if (!Array.isArray(items)) {
    throw new TypeError('Items must be an array');
  }
  const subtotal = items.reduce((acc, item) => acc + item.price, 0);
  return Number((subtotal * (1 + taxRate)).toFixed(2));
}

module.exports = { calculateTotal };