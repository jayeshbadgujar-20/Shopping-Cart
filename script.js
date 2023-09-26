// Sample product data
const product = {
    name: "Product Name",
    price: 49.99,
};

// DOM elements
const addToCartButton = document.getElementById("add-to-cart");
const cartItemsList = document.getElementById("cart-items");

// Initialize cart
const cart = [];

// Event listener for "Add to Cart" button
addToCartButton.addEventListener("click", () => {
    cart.push(product);
    displayCart();
});

// Function to display cart items
function displayCart() {
    cartItemsList.innerHTML = "";
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(li);
    });
}
