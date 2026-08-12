// CART DATA

let cart = [];


// ADD PRODUCT TO CART

function addToCart(name, price) {

  cart.push({
    name: name,
    price: price
  });

  updateCart();

  alert(name + " added to your cart!");
}


// UPDATE CART COUNT

function updateCart() {

  document.getElementById("cartCount").innerText = cart.length;

  let cartItems = document.getElementById("cartItems");

  cartItems.innerHTML = "";

  let total = 0;

  if (cart.length === 0) {

    cartItems.innerHTML =
      "<p>Your cart is empty.</p>";

  } else {

    cart.forEach((item, index) => {

      total += item.price;

      cartItems.innerHTML += `
        <div class="cart-item">

          <div>
            <strong>${item.name}</strong>
            <br>
            ₹${item.price}
          </div>

          <button onclick="removeItem(${index})">
            Remove
          </button>

        </div>
      `;

    });

  }

  document.getElementById("cartTotal").innerText = total;
}


// REMOVE ITEM

function removeItem(index) {

  cart.splice(index, 1);

  updateCart();
}


// OPEN CART

function openCart() {

  document.getElementById("cartModal").style.display = "flex";

  updateCart();
}


// CLOSE CART

function closeCart() {

  document.getElementById("cartModal").style.display = "none";
}


// CHECKOUT

function checkout() {

  if (cart.length === 0) {

    alert("Your cart is empty!");

    return;
  }

  alert(
    "Thank you for shopping with VÉRA! " +
    "Checkout functionality can be connected to a payment gateway later."
  );
}


// NEWSLETTER

function subscribe() {

  let email = document.getElementById("email").value;

  if (email === "") {

    alert("Please enter your email address.");

    return;
  }

  alert(
    "Thank you for subscribing to VÉRA!"
  );

  document.getElementById("email").value = "";
}


// BRAND BUTTON

function showMessage() {

  alert(
    "VÉRA — Where timeless fashion meets your individual story."
  );
}


// CLOSE CART WHEN CLICKING OUTSIDE

window.onclick = function(event) {

  let modal = document.getElementById("cartModal");

  if (event.target === modal) {

    closeCart();

  }

};
