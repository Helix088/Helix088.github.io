const requestURL =
    "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const prophets = jsonObject["prophets"];
        prophets.forEach((prophet) => {
            let card = document.createElement("section");
            let h2 = document.createElement("h2");
            let bdate = document.createElement("p");
            let bplace = document.createElement("p");
            let image = document.createElement("img");

            h2.textContent = `${prophet.name} ${prophet.lastname}`;
            bdate.textContent = prophet.birthdate;
            bplace.textContent = prophet.birthplace;
            image.setAttribute("src", prophet.imageurl);
            image.setAttribute(
                "alt",
                `The official portrait of ${prophet.name} ${prophet.lastname}!`
            );

            card.appendChild(h2);
            card.appendChild(bdate);
            card.appendChild(bplace);
            card.appendChild(image);

            document.querySelector("div.cards").appendChild(card);
        });
    });