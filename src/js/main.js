// Look for .hamburger
const hamburger = document.querySelector(".hamburger");
const bar = document.querySelector(".sidebar");
// On click
hamburger.addEventListener("click", function () {
    // Toggle class "is-active"
    bar.classList.toggle("active");
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
});