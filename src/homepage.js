import restImg from "../assets/restaurant.png";

function createHomePage() {
    const contentDiv = document.querySelector("#content");

    const restaurantImg = document.createElement("img");
    restaurantImg.src = restImg;
    restaurantImg.alt = "corner cafe";
    restaurantImg.width = "600";
    contentDiv.appendChild(restaurantImg);

    const headline = document.createElement("h1");
    headline.textContent = "Welcome to the beautiful corner bistro!";
    contentDiv.appendChild(headline);

    const para = document.createElement("p");
    para.textContent = `Welcome to our cozy French corner café in the heart of Nice. 
    Immerse yourself in the Parisian ambiance as you enjoy expertly brewed coffee and 
    indulge in our selection of authentic French pastries, from flaky croissants to 
    delicate macarons. Whether you seek a tranquil retreat or a lively gathering with 
    friends, experience a taste of France at our charming café.`
    contentDiv.appendChild(para);
}

export { createHomePage };