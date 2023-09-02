// Filtering

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
        (filterText === "Row Boat Special" && parseInt(numericPrice) < 14000) ||
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

// Send Info To LocalStorage

const addToCartButtons = document.querySelectorAll('[data-card-id]');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
        const cardId = this.getAttribute('data-card-id');
        const cardName = this.getAttribute('data-card-name');
        const cardPrice = this.getAttribute('data-product-price');

        console.log('Card Name:', cardName);
        console.log('Card Price:', cardPrice);

        const cartItem = { id: cardId, name: cardName, price: cardPrice };
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));
    });
});

// JQuery

$(document).ready(function () {
  // Add hover effect to product cards
  $(".product-card").hover(
      function () {
          // Mouse enter event
          $(this).css("transform", "scale(1.05)");
          $(this).css("box-shadow", "0 0 10px rgba(0, 0, 0, 0.2)");
          $(this).css("border-color", "#000");
      },
      function () {
          // Mouse leave event
          $(this).css("transform", "scale(1)");
          $(this).css("box-shadow", "none");
          $(this).css("border-color", "#ccc");
      }
  );
});