// ===============================
// ROCKSTAR-STYLE GAME STORE
// PAYMENT / CHECKOUT SCRIPT
// ===============================

let selectedGame = "";
let selectedPrice = 0;

// -------------------------------
// GAME DATA
// -------------------------------

const games = {
    gta6: {
        name: "Grand Theft Auto VI",
        price: 69.99
    },

    gta5: {
        name: "Grand Theft Auto V",
        price: 29.99
    },

    gta4: {
        name: "Grand Theft Auto IV",
        price: 19.99
    },

    rdr2: {
        name: "Red Dead Redemption 2",
        price: 59.99
    },

    rdr: {
        name: "Red Dead Redemption",
        price: 49.99
    },

    bully: {
        name: "Bully",
        price: 14.99
    },

    lanoire: {
        name: "L.A. Noire",
        price: 29.99
    }
};


// -------------------------------
// OPEN CHECKOUT
// -------------------------------

function openCheckout(gameID) {

    const game = games[gameID];

    if (!game) {
        alert("Game not found.");
        return;
    }

    selectedGame = game.name;
    selectedPrice = game.price;

    document.getElementById("checkoutGame").textContent =
        game.name;

    document.getElementById("checkoutPrice").textContent =
        "$" + game.price.toFixed(2);

    document.getElementById("checkoutModal").classList.add("active");

    // Reset payment form
    document.getElementById("paymentForm").reset();

    document.getElementById("cardFields").style.display = "block";
}


// -------------------------------
// CLOSE CHECKOUT
// -------------------------------

function closeCheckout() {

    document
        .getElementById("checkoutModal")
        .classList.remove("active");
}


// -------------------------------
// PAYMENT METHOD
// -------------------------------

function selectPayment(method) {

    const buttons =
        document.querySelectorAll(".payment-method");

    buttons.forEach(button => {
        button.classList.remove("selected");
    });

    const selectedButton =
        document.querySelector(
            `[data-payment="${method}"]`
        );

    if (selectedButton) {
        selectedButton.classList.add("selected");
    }

    const cardFields =
        document.getElementById("cardFields");

    const paypalFields =
        document.getElementById("paypalFields");

    const gcashFields =
        document.getElementById("gcashFields");

    const bankFields =
        document.getElementById("bankFields");

    cardFields.style.display = "none";
    paypalFields.style.display = "none";
    gcashFields.style.display = "none";
    bankFields.style.display = "none";

    if (method === "card") {
        cardFields.style.display = "block";
    }

    if (method === "paypal") {
        paypalFields.style.display = "block";
    }

    if (method === "gcash") {
        gcashFields.style.display = "block";
    }

    if (method === "bank") {
        bankFields.style.display = "block";
    }
}


// -------------------------------
// PROCESS PAYMENT
// -------------------------------

function processPayment(event) {

    event.preventDefault();

    const activePayment =
        document.querySelector(".payment-method.selected");

    if (!activePayment) {
        alert("Please select a payment method.");
        return;
    }

    const paymentMethod =
        activePayment.dataset.payment;

    // Basic validation
    if (paymentMethod === "card") {

        const cardNumber =
            document.getElementById("cardNumber").value;

        const expiry =
            document.getElementById("expiry").value;

        const cvv =
            document.getElementById("cvv").value;

        if (!cardNumber || !expiry || !cvv) {
            alert("Please complete your card details.");
            return;
        }
    }

    if (paymentMethod === "paypal") {

        const email =
            document.getElementById("paypalEmail").value;

        if (!email) {
            alert("Please enter your PayPal email.");
            return;
        }
    }

    if (paymentMethod === "gcash") {

        const number =
            document.getElementById("gcashNumber").value;

        if (!number) {
            alert("Please enter your GCash number.");
            return;
        }
    }

    if (paymentMethod === "bank") {

        const bank =
            document.getElementById("bankName").value;

        if (!bank) {
            alert("Please select a bank.");
            return;
        }
    }

    // Close checkout
    document
        .getElementById("checkoutModal")
        .classList.remove("active");

    // Show success message
    showPaymentSuccess(paymentMethod);
}


// -------------------------------
// PAYMENT SUCCESS
// -------------------------------

function showPaymentSuccess(method) {

    const successModal =
        document.getElementById("successModal");

    const successGame =
        document.getElementById("successGame");

    const successPrice =
        document.getElementById("successPrice");

    const successMethod =
        document.getElementById("successMethod");

    successGame.textContent = selectedGame;

    successPrice.textContent =
        "$" + selectedPrice.toFixed(2);

    successMethod.textContent =
        formatPaymentName(method);

    successModal.classList.add("active");
}


// -------------------------------
// PAYMENT NAME
// -------------------------------

function formatPaymentName(method) {

    const names = {
        card: "Credit / Debit Card",
        paypal: "PayPal",
        gcash: "GCash",
        bank: "Bank Transfer"
    };

    return names[method] || method;
}


// -------------------------------
// CLOSE SUCCESS
// -------------------------------

function closeSuccess() {

    document
        .getElementById("successModal")
        .classList.remove("active");
}


// -------------------------------
// CLOSE MODALS WHEN CLICKING OUTSIDE
// -------------------------------

window.addEventListener("click", function(event) {

    const checkout =
        document.getElementById("checkoutModal");

    const success =
        document.getElementById("successModal");

    if (event.target === checkout) {
        closeCheckout();
    }

    if (event.target === success) {
        closeSuccess();
    }
});


// -------------------------------
// ESC KEY
// -------------------------------

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeCheckout();
        closeSuccess();
    }
});


// -------------------------------
// GAME FILTER
// -------------------------------

function filterGames(category) {

    const cards =
        document.querySelectorAll(".game");

    cards.forEach(card => {

        if (category === "all") {
            card.style.display = "block";
            return;
        }

        const gameCategory =
            card.dataset.category;

        if (gameCategory === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });

    // Update filter buttons
    document
        .querySelectorAll(".filter-btn")
        .forEach(button => {
            button.classList.remove("active");
        });

    const active =
        document.querySelector(
            `[data-filter="${category}"]`
        );

    if (active) {
        active.classList.add("active");
    }
}


// -------------------------------
// SEARCH
// -------------------------------

function searchGames() {

    const input =
        document.getElementById("gameSearch");

    const search =
        input.value.toLowerCase();

    const cards =
        document.querySelectorAll(".game");

    cards.forEach(card => {

        const name =
            card
                .querySelector(".game-title")
                .textContent
                .toLowerCase();

        if (name.includes(search)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}


// -------------------------------
// AUTO CONNECT BUTTONS
// -------------------------------

document.addEventListener("DOMContentLoaded", function() {

    // ORDER NOW buttons
    document
        .querySelectorAll(".order-btn")
        .forEach(button => {

            button.addEventListener("click", function() {

                const gameID =
                    this.dataset.game;

                openCheckout(gameID);
            });
        });


    // PAYMENT METHOD buttons
    document
        .querySelectorAll(".payment-method")
        .forEach(button => {

            button.addEventListener("click", function() {

                selectPayment(
                    this.dataset.payment
                );
            });
        });


    // Payment form
    const paymentForm =
        document.getElementById("paymentForm");

    if (paymentForm) {
        paymentForm.addEventListener(
            "submit",
            processPayment
        );
    }


    // Search
    const search =
        document.getElementById("gameSearch");

    if (search) {
        search.addEventListener(
            "input",
            searchGames
        );
    }

});* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background: #080808;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
}

/* NAVBAR */

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 75px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 45px;

    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(10px);

    z-index: 100;
    border-bottom: 1px solid rgba(255,255,255,0.12);
}

.logo {
    font-size: 32px;
    font-weight: 900;
    font-style: italic;
    letter-spacing: -4px;
}

nav {
    display: flex;
    gap: 35px;
}

nav a {
    color: white;
    text-decoration: none;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 2px;
    transition: 0.3s;
}

nav a:hover {
    color: #f0b400;
}

.menu-btn {
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 28px;
}

/* HERO */

.hero {
    min-height: 100vh;

    position: relative;

    display: flex;
    align-items: center;

    background:
        linear-gradient(
            90deg,
            rgba(0,0,0,0.9),
            rgba(0,0,0,0.55),
            rgba(0,0,0,0.15)
        ),
        url("https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=2000&q=80");

    background-size: cover;
    background-position: center;
}

.hero-content {
    position: relative;
    max-width: 750px;
    margin-left: 9%;
    padding-top: 70px;
    z-index: 2;
}

.publisher {
    font-size: 13px;
    letter-spacing: 5px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #ddd;
}

h1 {
    font-size: clamp(55px, 9vw, 125px);
    line-height: 0.83;
    font-weight: 900;
    letter-spacing: -6px;
    text-transform: uppercase;
}

h1 span {
    color: #f0b400;
}

.description {
    max-width: 650px;
    margin-top: 35px;

    font-size: 17px;
    line-height: 1.7;
    color: #ddd;
}

/* BUTTONS */

.buttons {
    display: flex;
    gap: 15px;
    margin-top: 35px;
}

.order-btn,
.trailer-btn {
    padding: 17px 30px;
    border: none;
    cursor: pointer;

    font-weight: bold;
    letter-spacing: 2px;

    transition: 0.25s;
}

.order-btn {
    background: #f0b400;
    color: #050505;
}

.order-btn:hover {
    background: white;
    transform: translateY(-3px);
}

.trailer-btn {
    background: rgba(255,255,255,0.12);
    color: white;
    border: 1px solid rgba(255,255,255,0.4);
}

.trailer-btn:hover {
    background: white;
    color: black;
}

/* INFORMATION */

.info {
    padding: 100px 9%;
    background: #0c0c0c;
}

.info h2 {
    font-size: 45px;
    margin-bottom: 55px;
    letter-spacing: -2px;
}

.info-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
}

.info-grid h3 {
    color: #f0b400;
    margin-bottom: 15px;
    letter-spacing: 2px;
}

.info-grid p {
    color: #aaa;
    line-height: 1.7;
}

/* MODAL */

.modal {
    position: fixed;
    inset: 0;

    display: none;
    align-items: center;
    justify-content: center;

    background: rgba(0,0,0,0.8);
    backdrop-filter: blur(8px);

    z-index: 200;
}

.modal.active {
    display: flex;
}

.modal-box {
    width: 90%;
    max-width: 500px;

    background: #111;
    padding: 45px;

    border: 1px solid #333;
    box-shadow: 0 20px 80px rgba(0,0,0,0.8);

    position: relative;
}

.modal-box h2 {
    color: #f0b400;
    margin-bottom: 15px;
}

.modal-box p {
    color: #aaa;
    margin-bottom: 25px;
}

.modal-box button:not(.close) {
    width: 100%;
    padding: 15px;
    margin-top: 10px;

    border: none;
    background: #222;
    color: white;

    cursor: pointer;
    font-weight: bold;
}

.modal-box button:not(.close):hover {
    background: #f0b400;
    color: black;
}

.close {
    position: absolute;
    top: 15px;
    right: 20px;

    background: none;
    border: none;

    color: white;
    font-size: 30px;
    cursor: pointer;
}

.status {
    margin-top: 20px;
    color: #f0b400 !important;
}

/* MOBILE */

@media (max-width: 700px) {

    .navbar {
        padding: 0 20px;
    }

    nav {
        display: none;
    }

    .menu-btn {
        display: block;
    }

    .hero {
        background-position: 60% center;
    }

    .hero-content {
        margin-left: 7%;
        margin-right: 7%;
    }

    h1 {
        font-size: 58px;
        letter-spacing: -3px;
    }

    .description {
        font-size: 15px;
    }

    .buttons {
        flex-direction: column;
    }

    .order-btn,
    .trailer-btn {
        width: 100%;
    }

    .info-grid {
        grid-template-columns: 1fr;
    }

    .info h2 {
        font-size: 35px;
    }
}
