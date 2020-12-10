let header = document.querySelector(".header-nav");

let hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", function () {
	header.classList.toggle("menu-open");
});
