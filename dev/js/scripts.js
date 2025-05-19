import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

let banner = document.querySelector("#blue-bar");
let closeBannerBtn = document.querySelector("#close-bar-btn");

// Check local storage on page load
if (localStorage.getItem('bannerClosed') === 'true') {
    banner.style.display = 'none'; // Hide banner if closed before
}

closeBannerBtn.addEventListener("click", hideBlueBar);

function hideBlueBar(){
   banner.style.display = 'none'; // Hide banner
   localStorage.setItem('bannerClosed', 'true'); // Store in local storage
}

