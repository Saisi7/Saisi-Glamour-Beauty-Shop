// Greeting + Date
const greeting = document.getElementById("greeting");
const date = document.getElementById("date");

const hour = new Date().getHours();
if (hour < 12) greeting.innerText = "Good Morning 🌸";
else if (hour < 18) greeting.innerText = "Good Afternoon 🌷";
else greeting.innerText = "Good Evening 💖";

date.innerText = new Date().toDateString();

// Cart
let cartCount = 0;
function addToCart() {
    cartCount++;
    document.getElementById("cartCount").innerText = cartCount;
}

// Form Validation
function validateForm() {
    const email = document.getElementById("email").value;
    if (!email.includes("@")) {
        alert("Please enter a valid email!");
        return false;
    }
    alert("Message sent successfully 💕");
    return true;
}

// Theme Toggle
const toggle = document.getElementById("themeToggle");
if (toggle) {
    toggle.onclick = () => {
        document.body.classList.toggle("dark");
    };
}

