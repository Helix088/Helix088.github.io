const APPID = "d6715228d1a8c1a7461d432f816f3451";
const apiURL = `https://api.openweathermap.org/data/2.5/forecast?lat=30.6938&lon=-90.9782&appid=${APPID}&units=imperial`;

console.log(apiURL);

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const temperature = document.querySelector("#temperature");
    temperature.textContent = jsObject.list[0].main.temp.toFixed(0);
    const currently = document.querySelector("#currently");
    const desc = jsObject.list[0].weather[0].description;
    currently.innerHTML = `<strong>${desc.toUpperCase()}</strong>`;
    const humidity = document.querySelector("#humidity");
    humidity.textContent = jsObject.list[0].main.humidity;

    let day = 0;
    const dayofWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    //console.log(jsObject);
    const fiveDayForecast = jsObject.list.filter((forecast) =>
      forecast.dt_txt.includes("18:00:00")
    );
    //console.log(fiveDayForecast);

    fiveDayForecast.forEach((x) => {
      let d = new Date(x.dt_txt);
      document.getElementById(`dayofweek${day + 1}`).textContent =
        dayofWeek[d.getDay()];
      document.getElementById(`forecast${day + 1}`).textContent =
        x.main.temp.toFixed(0);
      document.getElementById(
        `icon${day + 1}`
      ).src = `https://openweathermap.org/img/wn/${x.weather[0].icon}.png`;
      day++;
    });
  });
