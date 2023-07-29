const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");
const responsiveMenu = document.querySelector(".responsive-menu");

hamburgerMenu.addEventListener("click", function () {
  navMenu.classList.toggle("show");
});
