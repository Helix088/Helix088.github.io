const requestURL = "/lesson13/json/business.json";

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const businesses = jsonObject["businesses"];
        businesses.forEach((business) => {
            let card = document.createElement("section");
            let h2 = document.createElement("h2");
            let founded = document.createElement("p");
            let owner = document.createElement("p");
            let phone = document.createElement("p");
            let description = document.createElement("p");

            h2.textContent = business.name;
            founded.textContent = `Year Founded: ${business.founded}`;
            owner.textContent = `Owner: ${business.owner}`;
            phone.textContent = `Phone: ${business.phone}`;
            description.textContent = `"${business.description}"`;

            card.appendChild(h2);
            card.appendChild(founded);
            card.appendChild(owner);
            card.appendChild(phone);
            card.appendChild(description);

            document.querySelector("div.cards").appendChild(card);
        });
    });