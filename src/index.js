import { createHomePage } from "./homepage.js";
import { createMenuPage } from "./menu.js";
import { createContactPage } from "./contact.js";
import "./style.css";

function createNavBar() {
    const divContent = document.querySelector("#content");

    // nav bar container
    const navBarDiv = document.querySelector("#nav-bar");

    // initialize nav bar buttons and store in array
    const navHomeDiv = document.createElement("div");
    navHomeDiv.textContent = "Home";

    const navMenuDiv = document.createElement("div");
    navMenuDiv.textContent = "Menu";

    const navContactDiv = document.createElement("div");
    navContactDiv.textContent = "Contact Us";

    const navBarItems = [
        {
            name: "Home",
            element: navHomeDiv,
            func: createHomePage
        },
        {
            name: "Menu",
            element: navMenuDiv,
            func: createMenuPage
        },
        {
            name: "Contact",
            element: navContactDiv,
            func: createContactPage
        }
    ];

    // add nav bar buttons
    for (let i = 0; i < navBarItems.length; i++) {
        navBarDiv.appendChild(navBarItems[i].element);
        navBarItems[i].element.addEventListener("click", () => {
            console.log(navBarItems[i].name);
            divContent.replaceChildren();
            navBarItems[i].func();
        })
    }

    return {
        navBarItems,
    }
};

createHomePage();

createNavBar();