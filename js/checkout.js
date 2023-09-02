// Pull From LocalStorage And Add To Table + Add Remove Button

document.addEventListener("DOMContentLoaded", function () {
  const cart = JSON.parse(localStorage.getItem("cart"));

  const tableBody = document.querySelector("#cart-table tbody");

  if (cart && cart.length > 0) {
      cart.forEach((item) => {
          const row = document.createElement("tr");
          row.innerHTML = `
              <td>${item.id}</td>
              <td>${item.name}</td>
              <td>${item.price}</td>
              <td class="remove-button"><button class="btn btn-danger">Remove</button></td>
          `;

          const removeButton = row.querySelector(".remove-button button");
          removeButton.addEventListener("click", () => {
              const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
              if (itemIndex !== -1) {
                  cart.splice(itemIndex, 1);
                  localStorage.setItem("cart", JSON.stringify(cart));
                  row.remove();
              }
          });

          tableBody.appendChild(row);
      });
  } else {
      const emptyRow = document.createElement("tr");
      emptyRow.innerHTML = `
          <td colspan="4">Your cart is empty.</td>
      `;
      tableBody.appendChild(emptyRow);
  }

  const clearCartButton = document.querySelector("#clear-cart");
  clearCartButton.addEventListener("click", () => {
      localStorage.removeItem("cart");
      tableBody.innerHTML = '<td colspan="4">Your cart is empty.</td>';
  });
});

// Modal PopUp

let popup = document.getElementById("popup");

function openPopup(){
  popup.classList.add("open-popup")
}

function closePopup(){
  popup.classList.remove("open-popup")
}

