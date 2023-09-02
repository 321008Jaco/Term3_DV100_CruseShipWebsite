// Define an empty shoppingCart array to store cart items
const shoppingCart = [];

// Function to add an item to the cart
function addToCart(cardId, cardName, quantity, cardPrice) {
  // Check if the item is already in the cart
  const existingItem = shoppingCart.find(item => item.id === cardId);

  if (existingItem) {
    // If the item is already in the cart, update its quantity
    existingItem.quantity += quantity;
  } else {
    // If the item is not in the cart, add it as a new item
    shoppingCart.push({
      id: cardId,
      name: cardName,
      quantity: quantity,
      price: cardPrice
    });
  }

  // Call the updateCartDisplay function to update the cart table
  updateCartDisplay();
}

// Function to update the cart display in the table
function updateCartDisplay() {
  const cartTableBody = document.getElementById("cart-table-body");

  // Clear existing table rows
  cartTableBody.innerHTML = '';

  // Loop through the shoppingCart array and add rows to the table
  shoppingCart.forEach(function (item) {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;

    const quantityCell = document.createElement("td");
    quantityCell.textContent = item.quantity;

    const costCell = document.createElement("td");
    const totalCost = item.quantity * item.price;
    costCell.textContent = `R${totalCost.toFixed(2)}`;

    const removeCell = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function () {
      // Implement logic to remove item from cart when the "Remove" button is clicked
    });

    removeCell.appendChild(removeButton);

    row.appendChild(nameCell);
    row.appendChild(quantityCell);
    row.appendChild(costCell);
    row.appendChild(removeCell);

    cartTableBody.appendChild(row);
  });
}

// Export necessary functions and variables
export { addToCart, shoppingCart };