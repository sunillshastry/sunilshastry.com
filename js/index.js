"use strict";

var allSocialLinks = document.querySelectorAll(".social__link");
var linkProject = document.getElementById("link-projects");
var linkAbout = document.getElementById("link-about");
var loaderContainer = document.getElementById("loader-container");
var loaderValue = document.getElementById("loader-value");
var loaderContentValue = 0;
var cookieContainer = document.querySelector(".cookie-notification");

document.querySelector(".social__btn").addEventListener("click", function(){
	document.querySelector(".mail__container").classList.toggle("mail-display");
});

document.querySelector(".mail__container").addEventListener("click", function(){
	const textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	textarea.value = "sunil.shastry69@gmail.com";
	textarea.select();
	document.execCommand("copy");
	textarea.remove();

	document.querySelector(".mail-status").textContent = "Copied!";
	setTimeout(() => {
		document.querySelector(".mail-status").textContent = "Mail me at";
	}, 1000);
});

loaderValue.innerHTML = loaderContentValue + "%";
document.addEventListener("DOMContentLoaded", function () {
	var contentLoaded = sessionStorage.getItem("contentLoaded");
	var cookieLoaded = sessionStorage.getItem("cookieDisplayed");

	if (JSON.parse(contentLoaded)) {
		loaderContainer.remove();
	} else {
		pageLoader();
	}

	if (JSON.parse(cookieLoaded)) {
		cookieContainer.remove();
	}
});

function showCookie() {
	var z = setTimeout(function () {
		cookieContainer.classList.add("cookie-display");
		sessionStorage.setItem("cookieDisplayed", JSON.stringify(true));
	}, 2000);
}

function pageLoader() {
	var x = setInterval(function () {
		loaderContentValue++;
		loaderValue.innerHTML = loaderContentValue + "%";

		if (loaderContentValue === 100) {
			clearInterval(x); // loaderContainer.classList.add("loader__container-remove");

			loaderContainer.classList.add("loader-remove");
			sessionStorage.setItem("contentLoaded", JSON.stringify(true));
			showCookie();
		}
	}, 100);
}

document.querySelector(".cookie-close").addEventListener("click", function () {
	cookieContainer.classList.remove("cookie-display");
	setTimeout(function () {
		cookieContainer.remove();
	}, 1200);
});
linkProject.addEventListener("mouseenter", function () {
	this.style.transform = "scale(1.2)";
	linkAbout.style.transform = "scale(0.8)";
	linkAbout.style.opacity = "0.7";
});
linkAbout.addEventListener("mouseenter", function () {
	this.style.transform = "scale(1.2)";
	linkProject.style.transform = "scale(0.8)";
	linkProject.style.opacity = "0.7";
});
linkProject.addEventListener("mouseleave", linkLeave);
linkAbout.addEventListener("mouseleave", linkLeave);

function linkLeave() {
	linkProject.style.transform = "scale(1)";
	linkAbout.style.transform = "scale(1)";
	linkAbout.style.opacity = "1";
	linkProject.style.opacity = "1";
}

allSocialLinks.forEach(function (socialLink) {
	socialLink.addEventListener("mouseenter", socialHoverEffect);
});
allSocialLinks.forEach(function (socialLink) {
	socialLink.addEventListener("mouseleave", function () {
		allSocialLinks.forEach(function (link) {
			link.style.opacity = "1";
		});
	});
});

function socialHoverEffect(e) {
	allSocialLinks.forEach(function (link) {
		link.style.opacity = "0.5";
	});
	e.target.style.opacity = "1";
}
