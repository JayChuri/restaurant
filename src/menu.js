import menuData from "./menudata.json";
import { iconMap } from "./iconregistry";
import "./menu.css"

// main wrapper
const mainContent = document.createElement("div");
mainContent.className = "main_content";

function createMenu(menu) {


    // header
    const header = document.createElement("div");
    header.className = "menu_header";

    const img = document.createElement("img");
    img.className = "menu_logo";
    img.src = iconMap[menu.icon];
    img.alt = menu.menuTitle;

    const title = document.createElement("h1");
    title.className = "menu_heading";
    title.textContent = menu.menuTitle;

    header.append(img, title);

    // menu items wrapper
    const menuItems = document.createElement("div");
    menuItems.className = "menu_items";

    menu.items.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.className = "menu_item";

        const name = document.createElement("p");
        name.textContent = item.name;

        const price = document.createElement("p");
        price.textContent = item.price;

        menuItem.append(name, price);
        menuItems.appendChild(menuItem);
    });

    mainContent.append(header, menuItems);
}

export function createMenus() {
    // render all menus
    menuData.forEach(menu => {
        createMenu(menu);
    });

    return mainContent;
}