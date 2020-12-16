"use strict";

let header = document.querySelector(".header-nav");

let hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", function () {
	header.classList.toggle("menu-open");
});

const debounce = (fn) => {
	let frame;
	return (...params) => {
		if (frame) {
			cancelAnimationFrame(frame);
		}
		frame = requestAnimationFrame(() => {
			fn(...params);
		});
	};
};

const storeScroll = () => {
	document.documentElement.dataset.scroll = window.scrollY;
};

document.addEventListener("scroll", debounce(storeScroll), { passive: true });

storeScroll();
