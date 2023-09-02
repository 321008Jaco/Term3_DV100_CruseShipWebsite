// Import functions and variables from shoppingCart.js
import { addToCart, shoppingCart } from './shoppingCart.js';

function updateCartDisplay() {
  const cartTableBody = document.getElementById("cart-table-body");
  cartTableBody.innerHTML = '';

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

// Call the updateCartDisplay function initially to populate the table with any existing cart items
updateCartDisplay();

// Example usage (replace these with your actual card data):
const cardId = "data-card-id";
const cardName = "data-card-name";
const quantity = " ";
const cardPrice = "product-price";

// After defining cardId, you can call addToCart
addToCart(cardId, cardName, quantity, cardPrice);