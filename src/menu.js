function createMenuPage() {
    const contentDiv = document.querySelector("#content");

    const h1 = document.createElement("h1");
    h1.textContent = "Today's menu:";
    contentDiv.appendChild(h1);

    const ul = document.createElement("ul");
    contentDiv.appendChild(ul);

    const items = [
        {
            name: "coffee",
            price: "$2.50"
        },
        {
            name: "croissant",
            price: "$3.50"
        },
        {
            name: "pain au chocolat",
            price: "$3.50"
        },
        {
            name: "scrambled eggs",
            price: "$6.00"
        },
        {
            name: "egg benedict",
            price: "$10.00"
        }
    ];

    for (let i = 0; i < 5; i++) {
        const menuItem = document.createElement("li");
        ul.appendChild(menuItem);

        menuItem.textContent = items[i].price + " - " + items[i].name;
    }
}

export { createMenuPage };