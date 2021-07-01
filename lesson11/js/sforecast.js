const cityId = "5607916";
const APPID = "f294865734f176c7193b898d22cbb23d";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${APPID}&units=imperial`;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        const temperature = document.querySelector("#temperature");
        temperature.textContent = jsObject.main.temp.toFixed(0);
        const currently = document.querySelector("#currently");
        const desc = jsObject.weather[0].description;
        currently.innerHTML = `<strong>${desc.toUpperCase()}</strong>`;
        const humidity = document.querySelector("#humidity");
        humidity.textContent = jsObject.main.humidity.toFixed(0);
        const speed = document.querySelector("#speed");
        speed.textContent = jsObject.wind.speed;

        let tempF = parseFloat(document.querySelector("#temperature").textContent);
        let wind = parseFloat(document.querySelector("#speed").textContent);

        if (tempF <= 50 && ((wind) => 3)) {
            let wc = windChill(tempF, wind);
            document.querySelector("#windchill").textContent = wc.toFixed(0);
        } else {
            document.querySelector("#windchill").textContent = "N/A";
        }

        function windChill(tempF, wind) {
            let wc =
                35.74 +
                0.6215 * tempF -
                35.75 * Math.pow(wind, 0.16) +
                0.4275 * tempF * Math.pow(wind, 0.16);
            return wc;
        }
    });