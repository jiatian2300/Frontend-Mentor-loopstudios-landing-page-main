const nav = document.querySelector(".nav-btns");
const navToggle = document.querySelector(".nav-toggle");
const body = document.querySelector("body");

navToggle.addEventListener("click", () => {
    nav.classList.toggle("nav-btns-visible");
    navToggle.classList.toggle("nav-toggle-close");
    body.classList.toggle("fixed-position");
});
