* {
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