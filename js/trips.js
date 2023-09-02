$(document).ready(function () {
  $(".option button").on("click", function () {
    var filterText = $(this).text();

    $(".product-card").each(function () {
      var cardDuration = $(this).find(".product-duration").text();
      var cardPrice = $(this).find(".product-price").text();
      var isSingleDestination = $(this).find(".product-destination").text().toLowerCase().includes("yes");
      var isRoundTrip = $(this).find(".product-stop").text().toLowerCase().includes("yes");

      var numericPrice = cardPrice.replace(/[^\d]/g, '');

      var displayCard = false;

      if (
        (filterText === "Less than 4 days" && parseInt(cardDuration.split(" ")[1]) < 4) ||
        (filterText === "Less than R14 000" && parseInt(numericPrice) < 14000) ||
        (filterText === "Longer than 4 days" && parseInt(cardDuration.split(" ")[1]) > 4) ||
        (filterText === "All Trips") ||
        (filterText === "Single Destination" && isSingleDestination) ||
        (filterText === "Multi Destination" && !isSingleDestination) ||
        (filterText === "Round Trips" && isRoundTrip)
      ) {
        displayCard = true;
      }

      if (displayCard) {
        $(this).fadeIn();
      } else {
        $(this).fadeOut();
      }
    });
  });
});

// Define an empty shopping cart as an array
const shoppingCart = [];

// Function to add an item to the cart
function addToCart(cardId, cardName, quantity, cardPrice) {
  // Create an object representing the item
  const item = {
    id: cardId,
    name: cardName,
    price: cardPrice,
    quantity: quantity
  };

  // Add the item to the shopping cart
  shoppingCart.push(item);

  // Update the cart display or perform any other desired actions
  updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
  // You can customize this function to update the cart display on the checkout page.
  // For example, you can loop through the shoppingCart array and populate a table with cart details.

  // As an example, let's log the cart contents to the console:
  console.log("Shopping Cart Contents:");
  console.table(shoppingCart);
}

document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const cardId = button.getAttribute("data-card-id");
      console.log("Card ID:", cardId);
      const cardName = document.querySelector(`.product-card[data-card-id="${cardId}"] h3`).textContent;
      const cardPrice = parseFloat(document.querySelector(`.product-card[data-card-id="${cardId}"] .product-price`).textContent.replace("Price: R", "").replace(",", ""));
      const quantity = 1;

      addToCart(cardId, cardName, quantity, cardPrice);
    });
  });
});