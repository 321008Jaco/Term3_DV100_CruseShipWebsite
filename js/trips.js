$(document).ready(function () {
    $(".option button").on("click", function () {
      var filterText = $(this).text();
  
      $(".product-card").each(function () {
        var cardDuration = $(this).find(".product-duration").text();
        var cardPrice = $(this).find(".product-price").text();
  
        var numericPrice = cardPrice.replace(/[^\d]/g, '');
  
        var displayCard = false;
        if (
          (filterText === "Less than 4 days" && parseInt(cardDuration.split(" ")[1]) < 4) ||
          (filterText === "Less than R14 000" && parseInt(numericPrice) < 14000)
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