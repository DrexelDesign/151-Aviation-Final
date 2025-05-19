import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

/* ------------------------------------------------------
					Blue Status Bar
------------------------------------------------------ */

// lets assgined to IDs in our HTML files.
let blueBar = document.querySelector("#blue-bar");
let closeBarBtn = document.querySelector("#close-bar-btn");

// Check local storage on page load
if(localStorage.getItem("bannerClosed") === "true"){
	//blueBar.style.display = 'none'; // Hide Blue Banner
}

// this is an event listener that is listening for a mouse click. If a mouse click is recorded it calls a function with the name of hideBlueBar.
closeBarBtn.addEventListener("click", hideBlueBar);

// this is our hideBlueBar function
function hideBlueBar(){
  	// console.log("Close button clicked");
  	blueBar.style.display = 'none'; // Hide Blue Banner
	localStorage.setItem("bannerClosed", "true");
}

/* ------------------------------------------------------
					Burger Menu
------------------------------------------------------ */

var burgerBtn = document.querySelector("#burger-btn");
var mainNav = document.querySelector("#main-nav");
var closeMainNav = document.querySelector("#close-main-nav-btn");

burgerBtn.addEventListener("click", openMobileMenu);
closeMainNav.addEventListener("click", closeMobileMenu);

function openMobileMenu(){
	// console.log("burger button pressed");

	// show mobile menu
	mainNav.style.display = "block";

	// hide burger menu
	burgerBtn.style.display = "none";

	// show close button
	closeMainNav.style.display = "block";
}

function closeMobileMenu(){

	// hide mobile menu
	mainNav.style.display = "none";

	// show burger menu
	burgerBtn.style.display = "block";

	// hide close button
	closeMainNav.style.display = "none";

}