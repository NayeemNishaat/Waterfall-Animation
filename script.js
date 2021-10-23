"use strict";

let i = true;
setInterval(function () {
	if (i) {
		document.querySelector(".solid div").classList.toggle(`solid__water`);
		document.querySelector(".box--1").classList.toggle(`box__water--a`);
		document.querySelector(".box--2").classList.toggle(`box__water--b`);
		document.querySelector(".box--3").classList.toggle(`box__water--c`);
	}
	i = !i;
}, 4000);
