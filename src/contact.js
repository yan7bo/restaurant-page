function createContactPage() {
    const contentDiv = document.querySelector("#content");

    const h1 = document.createElement("h1");
    h1.textContent = "Please come visit us";

    contentDiv.appendChild(h1);
}

export { createContactPage };