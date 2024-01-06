import { createHomePage } from "./homepage.js";
import "./style.css";

const createNavBar = (function() {
    // nav bar container
    const navBarDiv = document.querySelector("#nav-bar");

    // initialize nav bar buttons and store in array
    const navHomeDiv = document.createElement("div");
    navHomeDiv.textContent = "Home";

    const navMenuDiv = document.createElement("div");
    navMenuDiv.textContent = "Menu";

    const navContactDiv = document.createElement("div");
    navContactDiv.textContent = "Contact Us";

    const navBarItems = [navHomeDiv, navMenuDiv, navContactDiv];

    // add css styles to nav bar buttons
    for (let i = 0; i < navBarItems.length; i++) {
        navBarDiv.appendChild(navBarItems[i]);
    }
})();

createHomePage();