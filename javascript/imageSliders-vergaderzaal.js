const mediaQuery = window.matchMedia("(max-width: 768px)");

document.addEventListener("DOMContentLoaded", function () {
	if (mediaQuery.matches) {
		new Splide("#image-slider1", {
			type: "loop",
			padding: {
				right: "0rem",
				left: "0rem",
			},
		}).mount();
	} else {
		new Splide("#image-slider1", {
			type: "loop",
			padding: {
				right: "10rem",
				left: "10rem",
			},
		}).mount();
	}
});
