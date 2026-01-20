import people from "./aboutdata.json";
import "./about.css";

export function createAboutUs() {
    const mainContent = document.createElement("div");
    mainContent.id = "main_content";

    people.forEach(person => {
        const personCard = document.createElement("div");
        personCard.className = "person_card";

        // helper function to add a row
        function addRow(titleText, valueText) {
            const para = document.createElement("p");

            const title = document.createElement("span");
            title.className = "title";
            title.textContent = titleText;

            const details = document.createElement("span");
            details.className = "details";
            details.textContent = valueText;

            para.append(title,details);

            personCard.append(para);
        }

        addRow("Name: ", person.name);
        addRow("Designation: ", person.designation);
        addRow("Email: ", person.email);
        addRow("Phone: ", person.phoneno);
        


        mainContent.append(personCard);
    })


    return mainContent;
}