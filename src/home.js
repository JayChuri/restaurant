import "./home.css";
import imageJuice from "./juice.gif";

export function createHome() {
    const mainContentDiv = document.createElement("div");
    mainContentDiv.id = "main_content";

    const imageDiv = document.createElement("img");
    imageDiv.src = imageJuice;
    imageDiv.alt = "";
    imageDiv.className = "juice_image";
    mainContentDiv.appendChild(imageDiv);

    const contentDiv = document.createElement("div");
    contentDiv.className = "content";

    const h1Div = document.createElement("h1");
    h1Div.textContent = "Welcome to Love Mix Cafe";
    contentDiv.appendChild(h1Div);

    const hrDiv = document.createElement("hr");
    contentDiv.appendChild(hrDiv);

    const pDiv = document.createElement("p");
    pDiv.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa hic sint corrupti deserunt. Explicabo reiciendis error natus! Sapiente, vitae quos? Aspernatur rerum excepturi magnam aperiam omnis maxime vero laborum dicta!";
    contentDiv.appendChild(pDiv);

    mainContentDiv.appendChild(contentDiv);

    return mainContentDiv;
}
