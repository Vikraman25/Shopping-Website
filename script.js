
function signup(){
    window.location.href="signup.html";
}
function login(){
    window.location.href="login.html";
}
function cart(){
    window.location.href="cart.html";
}
function necklace(){
    window.location.href="necklace.html";
}
function earings(){
    window.location.href="earings.html";
}
function bangles(){
    window.location.href="bangles.html";
}



// Sample product data
const products = [
    { name: 'Necklace1', price: 134, image: 'static/images/necklace1.jpg' },
    // Add more products as needed
];

// Function to add a product to the cart and redirect
function addToCartAndRedirect(productName, productPrice, productImage) {
    // Create a new cart item object
    const cartItem = { name: productName, price: productPrice, image: productImage };

    // Retrieve existing cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new item to the cart
    cartItems.push(cartItem);

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Redirect to the cart page
    window.location.href = 'cart.html';
}

function addToCart(productName, productPrice, productImage) {
addToCartAndRedirect(productName, productPrice, productImage);
}

// login and sign up page


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//for database

//Requiring modules
