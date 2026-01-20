import "./index.css"
import { createHome } from "./home";
import { createMenus } from "./menu";
import { createAboutUs } from "./about";

console.log("Hello World!");

const home_button = document.getElementById("home_button");
home_button.addEventListener("click", function () {
    remove_main_content();
    document.body.appendChild(createHome());
    
});

const menu_button = document.getElementById("menu_button");
menu_button.addEventListener("click", function () {
    remove_main_content();
    document.body.appendChild(createMenus());
    
});

const about_us_button = document.getElementById("about_us_button");
about_us_button.addEventListener("click", function () {
    remove_main_content();
    document.body.appendChild(createAboutUs());
    
});



function remove_main_content() {
    const main_content = document.getElementById("main_content");
    if (main_content) {
        main_content.remove();
    }
}

document.body.appendChild(createHome());