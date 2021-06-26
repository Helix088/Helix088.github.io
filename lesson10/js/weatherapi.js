const cityId = "5604473";
const APPID = "f294865734f176c7193b898d22cbb23d";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${APPID}&units=imperial`;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        const temperature = document.querySelector("#temperature");
        temperature.textContent = jsObject.main.temp.toFixed(0);
        const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const desc = jsObject.weather[0].description;
        document.getElementById("imagesrc").textContent = imagesrc;
        document.getElementById("icon").setAttribute("src", imagesrc);
        document.getElementById("icon").setAttribute("alt", desc);
    });