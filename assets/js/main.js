const btnToggle = document.getElementById("btn-toggle");
const navContent = document.getElementById("nav-content");

// Resize Screen
window.addEventListener("resize", function () {
	sidebarSizeScreen();
});

btnToggle.addEventListener("click", function () {
	navContent.classList.toggle("mobile-toggled");
});

function sidebarSizeScreen() {
	const width = window.innerWidth;

	if (width > 1200) {
		navContent.classList.remove("mobile-toggled");
	}
}

// Splider
const splideContainer = document.getElementById("landing_page");
if (splideContainer != null) {
	document.addEventListener("DOMContentLoaded", function () {
		let splide = new Splide(".splide", {
			type: "loop",
			pagination: false,
			padding: "12rem",
			classes: {
				arrows: "splide__arrows",
				arrow: "splide__arrow",
				prev: "splide__arrow--prev",
				next: "splide__arrow--next",
			},
			breakpoints: {
				992: {
					padding: 0,
				},
			},
		});
		splide.mount();
	});
}

// Tab at profile.html
function openTab(e, tabName) {
	let i, tabcontents, tablinks;

	tabcontents = document.getElementsByClassName("tab-content");
	for (i = 0; i < tabcontents.length; i++) {
		tabcontents[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("tab-link");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(
			" btn-primary",
			" btn-question"
		);
	}

	document.getElementById(tabName).style.display = "block";
	e.currentTarget.className = e.currentTarget.className.replace(
		" btn-question",
		" btn-primary"
	);
}

const profile = document.getElementById("default");
if (profile != null) {
	profile.click();
}

const buttonLike = document.getElementById("like");

if (buttonLike != null) {
	buttonLike.addEventListener("click", function (e) {
		e.preventDefault();

		const icon = buttonLike.children[0];

		if (buttonLike.classList.contains("liked")) {
			buttonLike.classList.remove("liked");
			icon.src = "./assets/img/icon/heart.svg";
		} else {
			buttonLike.classList.add("liked");
			icon.src = "./assets/img/icon/heart-red.svg";
		}

		console.log(icon.src);
	});
}
